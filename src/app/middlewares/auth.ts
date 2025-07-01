import status from 'http-status';
import AppError from '../errors/AppError';
import { TUserRole } from '../modules/user/user.interface';
import catchAsync from '../utils/catchAsync';
import { verifyToken } from '../modules/auth/auth.utils';
import config from '../config';
import { JwtPayload } from 'jsonwebtoken';
import { User } from '../modules/user/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) throw new AppError(status.UNAUTHORIZED, 'Unauthorized');

    const decoded = verifyToken(
      token,
      config.jwt_secret as string,
    ) as JwtPayload;

    const { email, role, iat } = decoded;

    const user = await User.isUserExist(email);
    if (!user) throw new AppError(status.NOT_FOUND, 'User not found');
    if (user.isBlocked)
      throw new AppError(status.UNAUTHORIZED, 'User is blocked');
    if (user.isDeleted)
      throw new AppError(status.UNAUTHORIZED, 'User is deleted');

    if (
      user.passwordChagedAt &&
      User.isJWTIssuedBeforePasswordChanged(
        user.passwordChagedAt,
        iat as number,
      )
    ) {
      throw new AppError(
        status.UNAUTHORIZED,
        'You may be trying with old password',
      );
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(status.UNAUTHORIZED, 'Unauthorized');
    }

    req.user = decoded as JwtPayload;

    next();
  });
};

export default auth;

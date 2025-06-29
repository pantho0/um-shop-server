import status from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: TLogin) => {
  const user = await User.isUserExist(payload.email);
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User not found');
  }

  if (!User.isPasswordMatched(payload.password, user.password)) {
    throw new AppError(status.UNAUTHORIZED, 'Password is incorrect');
  }

  const jwtPayload = {
    userId: user._id,
    role: user.role,
    email: user.email,
  };

  const accessToken = createToken(jwtPayload, config.jwt_secret!, '20d');
  const refreshToken = createToken(jwtPayload, config.jwt_secret!, '20d');

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  loginUser,
};

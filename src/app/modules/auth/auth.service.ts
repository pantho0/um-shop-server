import status from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLogin } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';
import { JwtPayload } from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const loginUser = async (payload: TLogin) => {
  const user = await User.isUserExist(payload.email);
  if (!user) {
    throw new AppError(status.NOT_FOUND, 'User not found');
  }

  if (!(await User.isPasswordMatched(payload.password, user.password))) {
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

const changePasswordIntoDB = async (
  userInfo: JwtPayload,
  payload: { oldPassword: string; newPassword: string },
) => {
  const user = await User.isUserExist(userInfo.email);
  if (!user) throw new AppError(status.NOT_FOUND, 'User not found');
  if (user?.isBlocked)
    throw new AppError(status.UNAUTHORIZED, 'User is blocked');
  if (user?.isDeleted)
    throw new AppError(status.UNAUTHORIZED, 'User is deleted');
  if (!(await User.isPasswordMatched(payload.oldPassword, user.password)))
    throw new AppError(status.UNAUTHORIZED, 'Password is incorrect');
  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.salt_round),
  );
  await User.findOneAndUpdate(
    { email: userInfo.email, role: userInfo.role },
    { password: newHashedPassword, passwordChagedAt: new Date() },
    { new: true },
  );
  return null;
};

export const AuthServices = {
  loginUser,
  changePasswordIntoDB,
};

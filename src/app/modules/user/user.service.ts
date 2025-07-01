import status from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const isUserExist = await User.isUserExist(payload.email);
  if (isUserExist) {
    throw new AppError(status.BAD_REQUEST, 'User already exists');
  }
  const user = await User.create(payload);
  return user;
};

const getAllUserFromDB = async () => {
  const users = await User.find();
  return users;
};

const getMeFromDB = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getMeFromDB,
};

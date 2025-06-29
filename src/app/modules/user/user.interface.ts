import { Model } from 'mongoose';

export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
};

export interface UserModel extends Model<TUser> {
  isUserExist(email: string): Promise<TUser | null>;
}

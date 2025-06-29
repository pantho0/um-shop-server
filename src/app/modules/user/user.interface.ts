export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
};

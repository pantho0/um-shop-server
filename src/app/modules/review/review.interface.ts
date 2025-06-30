import { Types } from 'mongoose';

export type TReview = {
  productId: Types.ObjectId;
  userId: Types.ObjectId;
  rating: number;
  comment: string;
};

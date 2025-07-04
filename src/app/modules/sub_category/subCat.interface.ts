import { Document, Types } from 'mongoose';

export interface TSubCategory extends Document {
  name: string;
  slug?: string;
  parentCategory: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

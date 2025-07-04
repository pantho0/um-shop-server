import { Document, Types } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  parentCategory: Types.ObjectId;
  subCategory: Types.ObjectId;
  variant_color: string[];
  size: string[];
  slug?: string;
  details: string;
  price: number;
  images: string[];
}

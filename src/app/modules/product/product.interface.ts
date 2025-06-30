import { Document, Types } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  parentCategory: string;
  subCategory: string;
  variant_color: string[];
  size: string[];
  slug?: string;
  details: string;
  price: number;
  images: string[];
  reviews?: Types.ObjectId[];
}

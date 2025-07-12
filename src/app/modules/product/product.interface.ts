import { Document, Types } from 'mongoose';

export interface Variant {
  sku: string;
  color: string;
  size: string;
  price: number;
  stock: number;
}

export interface IProduct extends Document {
  title: string;
  parentCategory: Types.ObjectId;
  subCategory: Types.ObjectId;
  variants: Variant[];
  slug?: string;
  details: string;
  images: string[];
}

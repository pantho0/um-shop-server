import { Document } from 'mongoose';

export interface TParentCategory extends Document {
  name: string;
  slug?: string;
  createdAt: Date;
  updatedAt: Date;
}

import { Types } from 'mongoose';

export interface IOrder {
  fullName: string;
  mobileNumber: string;
  email: string;
  district: string;
  upazilla: string;
  detailsInformation: string;
  paymentMethod: string;
  status: 'Pending' | 'In progress' | 'Delivered' | 'Canceled';
  orderedItems: IOrderedItem[];
  grandTotal: number;
}

export interface IOrderedItem {
  id: Types.ObjectId;
  sku: string;
  name: string;
  price: number;
  image: string[] | string;
  color: string;
  model: string;
  quantity: number;
}

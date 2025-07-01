import { Types } from 'mongoose';

export type TOrderedProduct = {
  productId: Types.ObjectId;
  size: string;
  variant_color: string;
  u_price: number;
  qty: number;
  totalPrice: number;
};

export type TOrder = {
  userId: Types.ObjectId;
  dist: string;
  address: string;
  grand_total: number;
  isConfirmed: boolean;
  isDelivered: boolean;
  isPaid: boolean;
  paymentType: string;
  status: 'pending' | 'delivered';
  orderedProducts: TOrderedProduct[];
};

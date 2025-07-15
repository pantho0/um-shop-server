import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find().populate([
    {
      path: 'userId',
      select: 'firstName lastName email',
    },
    {
      path: 'orderedProducts.productId',
      select: 'title price',
    },
  ]);
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
};

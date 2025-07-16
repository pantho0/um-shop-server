import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const updateOrderStatus = async (orderId: string, statusOption: string) => {
  const result = await Order.findByIdAndUpdate(
    { _id: orderId },
    { $set: { status: statusOption } },
    { new: true },
  );
  return result;
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  updateOrderStatus,
};

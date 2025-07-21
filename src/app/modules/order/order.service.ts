import status from 'http-status';
import AppError from '../../errors/AppError';
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

const myOrdersFromDB = async (payload: string) => {
  const result = await Order.find({ email: payload });
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

const cancelOrderFromDB = async (orderId: string) => {
  const isOrderExist = await Order.findById(orderId);
  if (!isOrderExist) {
    throw new AppError(status.NOT_FOUND, 'Order not found');
  }
  if (isOrderExist.status === 'Pending') {
    const result = await Order.findByIdAndDelete(orderId);
    return result;
  } else {
    throw new AppError(
      status.FORBIDDEN,
      'You can not cancel any order when its confirmed or in-progress',
    );
  }
};

export const OrderServices = {
  createOrderIntoDB,
  getAllOrdersFromDB,
  updateOrderStatus,
  myOrdersFromDB,
  cancelOrderFromDB,
};

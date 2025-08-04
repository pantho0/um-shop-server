import status from 'http-status';
import AppError from '../../errors/AppError';
import { IOrder } from './order.interface';
import { Order } from './order.model';
import QueryBuilder from '../../builder/QueryBuilder';

const createOrderIntoDB = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  const orderQuery = new QueryBuilder(Order.find(), queryObj)
    .search(['orderId', 'email'])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await orderQuery.countTotal();
  const result = await orderQuery.modelQuery;
  return {
    meta,
    data: result,
  };
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

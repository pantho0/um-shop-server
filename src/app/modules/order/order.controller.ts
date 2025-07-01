import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { OrderServices } from './order.service';
import sendResponse from '../../utils/sendResponse';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrdersFromDB();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Orders fetched successfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrders,
};

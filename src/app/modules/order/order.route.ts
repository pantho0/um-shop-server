import { Router } from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { orderSchema } from './order.validation';

const router = Router();

router.get('/', OrderControllers.getAllOrders);
router.post(
  '/create-order',
  validateRequest(orderSchema),
  OrderControllers.createOrder,
);
router.put('/change-order-status', OrderControllers.updateOrderStatus);

export const OrderRoutes = router;

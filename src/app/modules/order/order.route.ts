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

export const OrderRoutes = router;

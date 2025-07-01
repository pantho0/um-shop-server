import { Router } from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createOrderValidationSchema } from './order.validation';

const router = Router();

router.get('/', OrderControllers.getAllOrders);
router.post(
  '/create-order',
  validateRequest(createOrderValidationSchema),
  OrderControllers.createOrder,
);

export const OrderRoutes = router;

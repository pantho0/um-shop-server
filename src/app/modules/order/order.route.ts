import { Router } from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { orderSchema } from './order.validation';

const router = Router();

router.get('/', OrderControllers.getAllOrders);
router.get('/:email', OrderControllers.getMyOrders);
router.post(
  '/create-order',
  validateRequest(orderSchema),
  OrderControllers.createOrder,
);
router.put('/change-order-status', OrderControllers.updateOrderStatus);
router.delete('/:orderId', OrderControllers.cancleOrder);

export const OrderRoutes = router;

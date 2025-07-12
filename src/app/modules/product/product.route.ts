import { Router } from 'express';
import { ProductControllers } from './product.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.const';

const router = Router();

router.get('/', ProductControllers.getAllProduct);
router.post(
  '/create-product',
  // auth(USER_ROLE.admin),
  ProductControllers.createProduct,
);
router.get('/:slug', ProductControllers.getProductById);
router.put(
  '/:slug',
  auth(USER_ROLE.admin),
  ProductControllers.updateProductById,
);
router.delete(
  '/:slug',
  auth(USER_ROLE.admin),
  ProductControllers.deleteProductById,
);

export const ProductRoutes = router;

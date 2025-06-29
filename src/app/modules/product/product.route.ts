import { Router } from 'express';
import { ProductControllers } from './product.controller';

const router = Router();

router.get('/', ProductControllers.getAllProduct);
router.post('/create-product', ProductControllers.createProduct);
router.get('/:slug', ProductControllers.getProductById);
router.put('/:slug', ProductControllers.updateProductById);
router.delete('/:slug', ProductControllers.deleteProductById);

export const ProductRoutes = router;

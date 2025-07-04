import { Router } from 'express';
import { ParentCategoryControllers } from './parentCat.controller';

const router = Router();

router.get('/', ParentCategoryControllers.getAllParentCategory);
router.post(
  '/create-parent-category',
  ParentCategoryControllers.createParentCategory,
);

export const ParentCategoryRoutes = router;

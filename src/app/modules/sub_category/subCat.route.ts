import { Router } from 'express';

import { subCategoryControllers } from './subCat.controller';

const router = Router();

router.post('/create-sub-category', subCategoryControllers.createSubCategory);
router.get('/', subCategoryControllers.getAllSubCategory);
router.get('/:parentId', subCategoryControllers.getSubCategoryByParentId);

export const subCategoryRoutes = router;

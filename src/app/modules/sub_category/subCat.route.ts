import { Router } from 'express';

import { subCategoryControllers } from './subCat.controller';

const router = Router();

router.post('/create-sub-category', subCategoryControllers.createSubCategory);
router.get('/get-all-sub-category', subCategoryControllers.getAllSubCategory);

export const subCategoryRoutes = router;

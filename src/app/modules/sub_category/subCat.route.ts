import { Router } from 'express';

import { subCategoryControllers } from './subCat.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.const';

const router = Router();

router.post(
  '/create-sub-category',
  auth(USER_ROLE.admin),
  subCategoryControllers.createSubCategory,
);
router.get('/', subCategoryControllers.getAllSubCategory);
router.get('/:parentId', subCategoryControllers.getSubCategoryByParentId);

export const subCategoryRoutes = router;

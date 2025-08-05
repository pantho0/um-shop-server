import { Router } from 'express';
import { ParentCategoryControllers } from './parentCat.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.const';

const router = Router();

router.get('/', ParentCategoryControllers.getAllParentCategory);
router.post(
  '/create-parent-category',
  auth(USER_ROLE.admin),
  ParentCategoryControllers.createParentCategory,
);

export const ParentCategoryRoutes = router;

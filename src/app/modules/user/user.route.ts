import { Router } from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createUserValidationSchema } from './user.validation';
import { USER_ROLE } from './user.const';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/', auth(USER_ROLE.admin), UserControllers.getAllUser);
router.get('/me', auth(USER_ROLE.admin, USER_ROLE.user), UserControllers.getMe);
router.post(
  '/create-user',
  validateRequest(createUserValidationSchema),
  UserControllers.createUser,
);

export const UserRoutes = router;

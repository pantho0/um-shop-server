import { Router } from 'express';
import { AuthControllers } from './auth.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.const';
import { changePasswordValidationSchema } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = Router();

router.post('/login', AuthControllers.login);
router.put(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.user),
  validateRequest(changePasswordValidationSchema),
  AuthControllers.changePassword,
);

export const AuthRoutes = router;

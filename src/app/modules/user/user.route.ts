import { Router } from 'express';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createUserValidationSchema } from './user.validation';

const router = Router();

router.get('/', UserControllers.getAllUser);
router.post(
  '/create-user',
  validateRequest(createUserValidationSchema),
  UserControllers.createUser,
);

export const UserRoutes = router;

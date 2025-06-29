import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();

router.get('/', UserController.getAllUser);
router.post('/create-user', UserController.createUser);

export const UserRoute = router;

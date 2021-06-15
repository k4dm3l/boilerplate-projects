import { Router, Application, Request, Response } from 'express';
import UserController from './controllers/user.controller';

export const userRouter = (expressApp: Application) => {
  const router: Router = Router();
  const userController: UserController = new UserController();

  expressApp.use('/api/v1/user', router);

  // - GET
  router.get('/', userController.getUserList);

  // - POST

  // - PATCH

  // - PUT

  // - DELETE
};

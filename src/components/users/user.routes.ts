import { Router, Application, Request, Response } from 'express';
import UserController from './controllers/user.controller';
import { validateSchemaParams } from '../../utils/middlewares/schemaValidator';
import { getUserByIdSchema } from './schemas/user.schemas';

export const userRouter = (expressApp: Application) => {
  const router: Router = Router();
  const userController: UserController = new UserController();

  expressApp.use('/api/v1/user', router);
  // - GET
  router.get('/', userController.getUserList);
  router.get(
    '/:id',
    validateSchemaParams(getUserByIdSchema),
    userController.getUserById
  );

  // - POST

  // - PATCH

  // - PUT

  // - DELETE
};

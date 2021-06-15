import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Application } from 'express';

import env from './configs';
import {
  notFoundHandler,
  wrapErrors,
  errorHandler,
} from './utils/middlewares/errorHandler';

// - Import Routes
import { userRouter } from './components/users/user.routes';

// - Init
const app: Application = express();

// - Global Middlewares
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan(env.environment === 'development' ? 'dev' : 'combined'));

// - Routes
userRouter(app);

// - Not found handler
app.use(notFoundHandler);

// - Error Handlers
app.use(wrapErrors);
app.use(errorHandler);

// - Start Server
const startServer = async (port: number) => {
  try {
    app.listen(port, () => console.log(`Running on http://localhost:${port}`));
    // Add DB connection HERE
  } catch (error) {
    process.on('uncaughtException', handlerExceptionError(error));
    process.on('unhandledRejection', handlerExceptionError(error));
  }
};

const handlerExceptionError = (error: Error) => {
  console.log(error.message);
  process.exit(1);
};

export default startServer;

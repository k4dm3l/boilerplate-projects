import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { Application } from 'express';
import { initServerSocketConnection } from './utils/libraries/sockets';
import MongoDBConnection from './databases/mongoose';
import SequelizeDBConnection from './databases/sequelize';

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
    const server = app.listen(port, () =>
      console.log(`Running on http://localhost:${port}`)
    );

    initServerSocketConnection(server);

    if (env.sequelizeDatabase) {
      const sequelize: SequelizeDBConnection = new SequelizeDBConnection({
        username: env.sequelizeConfiguration.username,
        password: env.sequelizeConfiguration.password,
        database: env.sequelizeConfiguration.database,
        configuration: {
          host: env.sequelizeConfiguration.configuration.host,
          port: parseInt(
            env.sequelizeConfiguration.configuration.port || '0',
            10
          ),
          dialect: env.sequelizeConfiguration.configuration.dialect,
          logging: env.sequelizeConfiguration.configuration.logging,
        },
      });

      await sequelize.connectDatabase();
    }

    // Add mongo DB connection HERE
    if (env.mongoDatabase) {
      const mongoose: MongoDBConnection = new MongoDBConnection({
        username: env.mongoConfiguration.username,
        password: env.mongoConfiguration.password,
        host: env.mongoConfiguration.host,
        database: env.mongoConfiguration.database,
        configurations: env.mongoConfiguration.configuration,
      });

      await mongoose.connectDatabase();
    }
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

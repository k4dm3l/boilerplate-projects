import { config } from 'dotenv';

config();

export default {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
  auth0Domain: process.env.AUTH0_DOMAIN || '',
  auth0Audience: process.env.AUTH0_AUDIENCE || '',
  mongoDatabase: false,
  mongoConfiguration: {
    username: process.env.MONGO_USERNAME || '',
    password: process.env.MONGO_PASSWORD || '',
    host: process.env.MONGO_HOST || '',
    database: process.env.MONGO_DB || '',
    configuration: {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  },
  sequelizeDatabase: false,
  sequelizeConfiguration: {
    username: process.env.SEQUELIZE_USERNAME || '',
    password: process.env.SEQUELIZE_PASSWORD || '',
    database: process.env.SEQUELIZE_DATABASE || '',
    configuration: {
      host: process.env.SEQUELIZE_HOST || '',
      port: process.env.SEQUELIZE_PORT || '',
      dialect: process.env.SEQUELIZE_DIALECT || '',
      logging: false,
    },
  },
};

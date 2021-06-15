import { config } from 'dotenv';

config();

export default {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4000,
};
import mongoose from 'mongoose';
import { IMongoConnectionCredentials } from '../interfaces/IMongoConnectionCredentials';
import boom from '@hapi/boom';

export default class MongoDBConnection {
  private username = '';
  private password = '';
  private host = '';
  private database = '';
  private configurations = {};

  constructor(mongoCredentials: IMongoConnectionCredentials) {
    this.username = mongoCredentials.username;
    this.password = mongoCredentials.password;
    this.host = mongoCredentials.host;
    this.database = mongoCredentials.database;
    this.configurations = mongoCredentials.configurations;
  }

  async connectDatabase() {
    try {
      const connectionUrl: string = `mongodb+srv//${this.username}:${this.password}@${this.host}/${this.database}`;
      await mongoose.connect(connectionUrl, this.configurations);
      console.log('Mongo - DB Connection established');
    } catch (error) {
      throw boom.badImplementation(error);
    }
  }
}

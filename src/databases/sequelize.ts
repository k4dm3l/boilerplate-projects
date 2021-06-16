import { Sequelize } from 'sequelize';
import { ISequelizeConnectionCredentials } from '../interfaces/ISequelizeConnectionCredentials';
import boom from '@hapi/boom';

let databaseConnection: any = null;
export default class SequelizeDBConnection {
  private sequelizeConfiguration: ISequelizeConnectionCredentials;

  constructor(sequelizeCredentials: ISequelizeConnectionCredentials) {
    this.sequelizeConfiguration = sequelizeCredentials;
  }

  async connectDatabase() {
    try {
      if (!databaseConnection) {
        databaseConnection = new Sequelize(
          this.sequelizeConfiguration.database,
          this.sequelizeConfiguration.username,
          this.sequelizeConfiguration.password,
          {
            database: this.sequelizeConfiguration.database,
            username: this.sequelizeConfiguration.username,
            password: this.sequelizeConfiguration.password,
            host: this.sequelizeConfiguration.configuration.host,
            port: this.sequelizeConfiguration.configuration.port,
            dialect: 'mysql',
            logging: this.sequelizeConfiguration.configuration.logging,
          }
        );

        return databaseConnection;
      }

      return databaseConnection;
    } catch (error) {
      throw boom.badImplementation(error);
    }
  }
}

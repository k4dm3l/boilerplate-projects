export interface ISequelizeConnectionCredentials {
  username: string;
  password: string;
  database: string;
  configuration: {
    host: string;
    port: number;
    dialect: string;
    logging: boolean;
  };
}

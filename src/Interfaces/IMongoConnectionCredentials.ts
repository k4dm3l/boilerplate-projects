export interface IMongoConnectionCredentials {
  username: string;
  password: string;
  host: string;
  database: string;
  configurations: {
    userNewUrlParser: boolean;
    useUnifiedTopology: boolean;
    useFindAndModify: boolean;
    useCreateIndex: boolean;
  };
}

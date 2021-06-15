import env from './configs';
import startServer from './app';

const normalizePort = (envPort: any) => {
  const normalizedPort = parseInt(envPort, 10);

  if (isNaN(normalizedPort)) return envPort;
  if (normalizedPort > 0) return normalizedPort;
};

startServer(normalizePort(env.port));

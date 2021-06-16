import { Server, Socket } from 'socket.io';

let socketConnection: any = null;

const emitEvent = async (event: string, data: any) => {
  await socketConnection.emit(event, data);
};

const emitEventToRoom = async (room: string, event: string, data: any) => {
  await socketConnection.to(room).emit(event, data);
};

const initServerSocketConnection = (server: any) => {
  const io = new Server(server, {
    transports: ['websocket', 'polling'],
    cors: {
      origin: ['*'],
      methods: ['GET', 'HEAD', 'OPTIONS', 'PUT', 'PATCH', 'POST', 'DELETE'],
      credentials: false,
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'X-Access-Token',
        'Authorization',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials',
      ],
    },
  });

  io.on('connection', (newSocket: Socket) => {
    console.log(`New socket connection: ${newSocket.id}`);

    /**
     * Add Logic to handled rooms
     */
  });

  socketConnection = io;
};

export { initServerSocketConnection, emitEvent, emitEventToRoom };

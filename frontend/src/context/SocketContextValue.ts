import { createContext } from "react";
import type { Socket } from "socket.io-client";

export interface ISocketContext {
  socket: Socket | null;
  onlineUsers: string[];
}

export const SocketContext = createContext<ISocketContext | undefined>(
  undefined,
);

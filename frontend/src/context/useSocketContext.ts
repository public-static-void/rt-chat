import { useContext } from "react";
import { SocketContext } from "./SocketContextValue";

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (context === undefined) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider",
    );
  }

  return context;
};

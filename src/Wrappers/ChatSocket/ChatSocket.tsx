import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "./UseSocket";
import { useDispatch } from "react-redux";
import { ChatEntry } from "../../Components/SideChat/SideChat";
import { updateChat } from "../../Store/Chat";

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    newSocket.on("receiveMessage", (message: ChatEntry) => {
      dispatch(updateChat(message));
    });

    return () => {
      newSocket.close();
    };
  }, [dispatch]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

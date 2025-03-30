import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SocketContext } from "./UseSocket";
import { useDispatch } from "react-redux";
import { ChatEntry } from "../../Components/SideChat/SideChat";
import { updateChat } from "../../Store/Chat";
import messageSound from "../../assets/sounds/message.mp3";

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const newSocket = io(import.meta.env.VITE_CHAT_SERVER);
    setSocket(newSocket);

    const audio: HTMLAudioElement = new Audio(messageSound);

    newSocket.on("connect", () => {
      setIsConnected(true);
    });

    newSocket.on("disconnect", () => {
      setIsConnected(false);
    });

    newSocket.on("receiveMessage", (message: ChatEntry) => {
      dispatch(updateChat(message));
      audio.play();
    });

    return () => {
      newSocket.close();
    };
  }, [dispatch]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};

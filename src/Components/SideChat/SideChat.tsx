import React, { useEffect, useRef, useState } from "react";
import "./SideChat.css";
import { AbilitiesList, WaitsList } from "@/Screens/CharacterSelection/types";
import { parseMessage } from "@/Functions/parseMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  resetChat,
  resetChatCmdHistory,
  updateChatCmdHistory,
} from "@/Store/Chat";
import { RootState } from "@/Store";
import { useSocket } from "@/Wrappers/ChatSocket/UseSocket";

/*
This data structure is shared with the web server (`chat-server-void-farers` repository).
Make sure that any change in the `ChatMessage`, `ChatRoll`, `ChatEntry`, `WaitsList` or `AbilitiesList` interfaces is reflected in the server.
*/
export interface ChatMessage {
  author: string;
  message: string;
  colorId: string;
}

export interface ChatRoll {
  author: string;
  rollType: WaitsList | AbilitiesList | string;
  rollValue: number;
  critical?: "success" | "fail";
  colorId: string;
}

export type ChatEntry = ChatMessage | ChatRoll;

interface SideChatProps {
  userName: string;
  colorId: string;
}

const isChatMessage = (entry: ChatEntry): entry is ChatMessage => {
  return (entry as ChatMessage).message !== undefined;
};

const Message: React.FC<ChatEntry> = (props) => {
  if (isChatMessage(props)) {
    return (
      <div className="chat-message">
        <span
          className="chat-author"
          style={{
            color: props.colorId,
            textShadow: `0 0 0.625rem ${props.colorId}`,
          }}
        >
          {props.author}:{" "}
        </span>
        {props.message}
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <span
          className="chat-author"
          style={{
            color: props.colorId,
            textShadow: `0 0 0.625rem ${props.colorId}`,
          }}
        >
          {props.author}:{" "}
        </span>
        <span>
          rolled for <span className="chat-roll-type">{props.rollType}</span>:
        </span>
        <div className="roll-value-container">
          <span
            className={
              props.critical
                ? props.critical === "success"
                  ? "chat-roll-success"
                  : "chat-roll-fail"
                : "chat-roll"
            }
          >
            {props.rollValue}
          </span>
        </div>
      </div>
    );
  }
};

const SideChat: React.FC<SideChatProps> = (props: SideChatProps) => {
  const dispatch = useDispatch();
  const { socket, isConnected } = useSocket();

  const chatHistory: ChatEntry[] = useSelector(
    (state: RootState) => state.chat.chatEntries,
  );
  const cmdHistoryStore: string[] = useSelector(
    (state: RootState) => state.chat.cmdHistory,
  );
  const maxHistory: number = useSelector(
    (state: RootState) => state.chat.maxHistory,
  );

  const [inputValue, setInputValue] = useState<string>("");
  const [historyCmdLength, setHistoryCmdLength] = useState<number | undefined>(
    undefined,
  );
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newMessage: ChatMessage = {
        author: props.userName,
        message: inputValue,
        colorId: props.colorId,
      };
      const parsedMessage: ChatEntry = parseMessage(newMessage);
      let cmdHistoryList: string[] = cmdHistoryStore;
      const lastRegisteredCmd: string = cmdHistoryList ? cmdHistoryList[0] : "";
      if (lastRegisteredCmd !== inputValue) {
        if (
          cmdHistoryList !== undefined &&
          cmdHistoryList.length >= maxHistory
        ) {
          cmdHistoryList = cmdHistoryList.slice(0, cmdHistoryList.length - 1);
        }
        const updatedCmdHistory: string[] = cmdHistoryList
          ? [inputValue, ...cmdHistoryList]
          : [inputValue];
        dispatch(updateChatCmdHistory(updatedCmdHistory));
        setHistoryCmdLength(updatedCmdHistory.length);
      }
      if (socket) {
        socket.emit("sendMessage", parsedMessage);
      }
      setHistoryIndex(0);
      setInputValue("");
    } else if ((event.metaKey || event.ctrlKey) && event.key === "l") {
      event.preventDefault();
      dispatch(resetChat({}));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      let tmpIndex: number = historyIndex;
      if (historyIndex >= cmdHistoryStore.length && historyCmdLength) {
        setHistoryIndex(0);
        tmpIndex = 0;
        setInputValue(cmdHistoryStore[tmpIndex]);
      } else if (historyCmdLength) {
        const newIndex: number =
          historyIndex + 1 < historyCmdLength ? historyIndex + 1 : 0;
        setInputValue(cmdHistoryStore[tmpIndex]);
        setHistoryIndex(newIndex);
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      let tmpIndex: number = historyIndex;
      if (historyIndex < 0 && historyCmdLength) {
        tmpIndex = historyCmdLength - 1;
        setHistoryIndex(tmpIndex);
        setInputValue(cmdHistoryStore[tmpIndex]);
      } else if (historyCmdLength) {
        tmpIndex =
          historyIndex - 1 >= 0 ? historyIndex - 1 : historyCmdLength - 1;
        setHistoryIndex(tmpIndex);
        setInputValue(cmdHistoryStore[tmpIndex]);
      }
    } else if ((event.metaKey || event.ctrlKey) && event.key === "e") {
      dispatch(resetChatCmdHistory({}));
    }
  };

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="side-chat">
      <div className="chat-history" ref={chatHistoryRef}>
        {chatHistory.map((entry, index) => (
          <Message key={index} {...entry} />
        ))}
      </div>
      {isConnected ? (
        <div className="connected-status-container">///-- CONNECTED --///</div>
      ) : (
        <div className="no-connection-status-container">
          ///-- NO CONNECTION --///
        </div>
      )}
      <div className="chat-entry">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default SideChat;

import React, { useEffect, useRef, useState } from "react";
import "./SideChat.css";
import {
  AbilitiesList,
  WaitsList,
} from "../../Screens/CharacterSelection/types";
import { parseMessage } from "../../Functions/parseMessage";
import { useDispatch, useSelector } from "react-redux";
import { resetChat, updateChat } from "../../Store/Chat";
import { RootState } from "../../Store";
export interface ChatMessage {
  author: string;
  message: string;
}

export interface ChatRoll {
  author: string;
  rollType: WaitsList | AbilitiesList | string;
  rollValue: number;
}

export type ChatEntry = ChatMessage | ChatRoll;

interface SideChatProps {
  userName: string;
}

const isChatMessage = (entry: ChatEntry): entry is ChatMessage => {
  return (entry as ChatMessage).message !== undefined;
};

const Message: React.FC<ChatEntry> = (props) => {
  if (isChatMessage(props)) {
    return (
      <div className="chat-message">
        <span className="chat-author">{props.author}: </span>
        {props.message}
      </div>
    );
  } else {
    return (
      <div className="chat-message">
        <span className="chat-author">{props.author}: </span>
        <span>
          rolled for <span className="chat-roll-type">{props.rollType}</span>:
        </span>
        <div className="roll-value-container">
          <span className="chat-roll">{props.rollValue}</span>
        </div>
      </div>
    );
  }
};

const SideChat: React.FC<SideChatProps> = (props: SideChatProps) => {
  const dispatch = useDispatch();
  const chatHistoryStore: ChatEntry[] = useSelector(
    (state: RootState) => state.chat
  );
  const [chatHistory, setChatHistory] = useState<ChatEntry[]>(chatHistoryStore);
  const [inputValue, setInputValue] = useState<string>("");
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newMessage: ChatMessage = {
        author: props.userName,
        message: inputValue,
      };
      const parsedMessage = parseMessage(newMessage);
      const updatedChatHistory = [parsedMessage, ...chatHistory];
      setChatHistory(updatedChatHistory);
      dispatch(updateChat(parsedMessage));
      setInputValue("");
    } else if ((event.metaKey || event.ctrlKey) && event.key === "l") {
      event.preventDefault();
      setChatHistory([]);
      dispatch(resetChat({}));
    }
  };

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <>
      <div className="side-chat">
        <div className="chat-history" ref={chatHistoryRef}>
          {chatHistory.map((entry, index) => (
            <Message key={index} {...entry} />
          ))}
        </div>

        <div className="chat-entry">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};

export default SideChat;

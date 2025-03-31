import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ChatEntry } from "../../Components/SideChat/SideChat";

interface ChatProps {
  chatEntries: ChatEntry[];
  cmdHistory: string[];
  maxHistory: number;
}

const initialState: ChatProps = {
  chatEntries: [],
  cmdHistory: [],
  maxHistory: 15,
} as ChatProps;

const Chat: Slice<ChatProps> = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    updateChat: (state: ChatProps, action: PayloadAction<ChatEntry>) => {
      return {
        ...state,
        chatEntries: [action.payload, ...state.chatEntries],
      };
    },
    updateChatCmdHistory: (
      state: ChatProps,
      action: PayloadAction<string[]>,
    ) => {
      return {
        ...state,
        cmdHistory: action.payload,
      };
    },

    resetChat: (state: ChatProps) => {
      return { ...initialState, cmdHistory: state.cmdHistory };
    },
    resetChatCmdHistory: (state: ChatProps) => {
      return { ...state, cmdHistory: [] };
    },
    resetAllChat: () => {
      return initialState;
    },
  },
});

export const {
  updateChat,
  updateChatCmdHistory,
  resetChat,
  resetChatCmdHistory,
  resetAllChat,
} = Chat.actions;

export default Chat.reducer;

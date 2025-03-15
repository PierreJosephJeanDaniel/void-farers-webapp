import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { ChatEntry } from "../../Components/SideChat/SideChat";

const initialState: ChatEntry[] = [];

const Chat: Slice<ChatEntry[]> = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    updateChat: (state: ChatEntry[], action: PayloadAction<ChatEntry>) => {
      return [action.payload, ...state];
    },

    resetChat: () => {
      return initialState;
    },
  },
});

export const { updateChat, resetChat } = Chat.actions;

export default Chat.reducer;

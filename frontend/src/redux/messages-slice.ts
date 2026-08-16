import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MessageData, MessageState } from "./types";

const initialState: MessageState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<MessageData[]>) => {
      state.messages = action.payload;
    },

    addMessage: (state, action: PayloadAction<MessageData>) => {
      state.messages.push(action.payload);
    },
  },
});

export const { setMessages, addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;

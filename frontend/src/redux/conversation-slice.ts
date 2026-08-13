import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ConversationData, ConversationState } from "./types";

const initialState: ConversationState = {
  conversations: [],
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setConversation: (state, action: PayloadAction<ConversationData[]>) => {
      state.conversations = action.payload;
    },

    addConversation: (state, action: PayloadAction<ConversationData>) => {
      state.conversations.unshift(action.payload);
    },
  },
});

export const { setConversation, addConversation } = conversationSlice.actions;
export default conversationSlice.reducer;

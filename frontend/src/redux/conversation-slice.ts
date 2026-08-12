import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ConversationData, ConversationState } from "./types";

const initialState: ConversationState = {
  conversationData: [],
};

const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setConversation: (state, action: PayloadAction<ConversationData[]>) => {
      state.conversationData = action.payload;
    },

    addConversation: (state, action: PayloadAction<ConversationData>) => {
      state.conversationData.unshift(action.payload);
    },
  },
});

export const { setConversation, addConversation } = conversationSlice.actions;
export default conversationSlice.reducer;

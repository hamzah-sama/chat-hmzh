import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ConversationData, ConversationState } from "./types";

const initialState: ConversationState = {
  conversations: [],
  selectedConversation: null,
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
    deleteConversation: (state, action: PayloadAction<string>) => {
      state.conversations = state.conversations.filter(
        (conversation) => conversation._id !== action.payload,
      );
    },

    updateConversation: (
      state,
      action: PayloadAction<{
        id: string;
        title: string;
      }>,
    ) => {
      const conversation = state.conversations.find(
        (conversation) => conversation._id === action.payload.id,
      );

      if (conversation) {
        conversation.title = action.payload.title;
      }
    },
  },
});

export const {
  setConversation,
  addConversation,
  deleteConversation,
  updateConversation,
} = conversationSlice.actions;
export default conversationSlice.reducer;

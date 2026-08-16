import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import conversationReducer from "./conversation-slice";
import themeReducer from "./theme-slice";
import messagesSlice from "./messages-slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    conversation: conversationReducer,
    theme: themeReducer,
    messages: messagesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

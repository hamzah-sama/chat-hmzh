import mongoose from "mongoose";
import Conversation from "../models/conversation.model.ts";

export const isValidUserId = (id: unknown): boolean => {
  return typeof id === "string";
};

export const isValidConversationId = (id: unknown): boolean => {
  return typeof id === "string" && mongoose.Types.ObjectId.isValid(id);
};

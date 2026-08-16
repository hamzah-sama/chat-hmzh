import mongoose from "mongoose";

export const isValidUserId = (id: unknown): id is string => {
  return typeof id === "string";
};

export const isValidConversationId = (id: unknown): id is string => {
  return typeof id === "string" && mongoose.Types.ObjectId.isValid(id);
};

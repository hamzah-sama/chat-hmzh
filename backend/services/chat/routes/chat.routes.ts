import express from "express";
import {
  createConversation,
  updateConversation,
  getConversation,
  getMessages,
  createMessage,
  deleteConversation,
  test,
} from "../controller/chat.controller.ts";

const router = express.Router();

router.post("/create-conversation", createConversation);
router.put("/update-conversation", updateConversation);
router.get("/get-conversation", getConversation);
router.post("/create-message", createMessage);
router.get("/get-messages/:conversationId", getMessages);
router.delete("/delete-conversation", deleteConversation);
router.post("/test", test);

export default router;

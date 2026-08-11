import express from "express";
import {
  createConversation,
  updateConversation,
  getConversation,
  saveMessage,
  getMessages,
} from "../controller/chat.controller.ts";

const router = express.Router();

router.post("/create-conversation", createConversation);
router.put("/update-conversation", updateConversation);
router.get("/get-conversation", getConversation);
router.post("/save-message", saveMessage);
router.get("/get-messages/:conversationId", getMessages);

export default router;

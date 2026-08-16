import { Request, Response } from "express";
import Conversation from "../models/conversation.model.ts";
import Message from "../models/message.model.ts";
import { isValidConversationId, isValidUserId } from "./utils.ts";

export const createConversation = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"];
    const { message } = req.body;
    if (!isValidUserId(userId)) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        message: "Invalid message",
      });
    }

    const title =
      message.length > 20 ? message.slice(0, 20).concat("...") : message;

    const conversation = await Conversation.create({
      userId,
      title,
    });

    return res.status(201).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Create conversation error: ${error}` });
  }
};
export const updateConversation = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"];
    const { id, title } = req.body;
    if (!isValidUserId(userId)) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    if (!isValidConversationId(id)) {
      return res.status(400).json({
        message: "Invalid conversation ID",
      });
    }

    const conversation = await Conversation.findOneAndUpdate(
      { _id: id, userId },
      { title },
    );

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    return res.status(200).json({
      message: "Conversation updated successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Update conversation error: ${error}` });
  }
};

export const getConversation = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"];
    if (!isValidUserId(userId)) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }
    const conversation = await Conversation.find({
      userId,
    }).sort({ updatedAt: -1 });

    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error getting conversation: ${error}` });
  }
};

export const deleteConversation = async (req: Request, res: Response) => {
  try {
    const { conversationId } = req.body;
    const userId = req.headers["x-user-id"];

    if (!isValidUserId(userId)) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    if (!isValidConversationId(conversationId)) {
      return res.status(400).json({
        message: "Invalid conversation ID",
      });
    }

    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId,
    });

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    await Message.deleteMany({ conversationId });

    await conversation.deleteOne();

    return res.status(200).json("Conversation deleted successfully");
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Delete conversation error: ${error}` });
  }
};

export const createMessage = async (req: Request, res: Response) => {
  try {
    const { conversationId, role, content } = req.body;
    const userId = req.headers["x-user-id"];

    if (!isValidUserId(userId)) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    if (!isValidConversationId(conversationId)) {
      return res.status(400).json({
        message: "Invalid conversation ID",
      });
    }

    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId,
    });

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }
    const message = await Message.create({ conversationId, role, content });

    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ error: `Save message error: ${error}` });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { conversationId } = req.params;
    const userId = req.headers["x-user-id"];

    if (!isValidUserId(userId)) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    if (!isValidConversationId(conversationId)) {
      return res.status(400).json({
        message: "Invalid conversation ID",
      });
    }
    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId,
    });

    if (!conversation) {
      return res.status(404).json({
        message: "Conversation not found",
      });
    }

    const messages = await Message.find({ conversationId }).sort({
      createdAt: 1,
    });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error: `Get message error: ${error}` });
  }
};

export const test = async (req: Request, res: Response) => {
  const userId = req.headers["x-user-id"];
  const { content } = req.body;
  console.log({ userId, content });

  res.status(200).json({
    message: "Test chat route is working",
  });
};

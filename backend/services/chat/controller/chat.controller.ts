import { Request, Response } from "express";
import Conversation from "../models/conversation.model.ts";
import Message from "../models/message.model.ts";
import mongoose from "mongoose";

export const createConversation = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"];
    if (typeof userId !== "string") {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    const conversation = await Conversation.create({
      userId,
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
    const { id, title } = req.body;
    const conversation = await Conversation.findByIdAndUpdate(id, {
      title,
    });

    return res.status(200).json(conversation);
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Create conversation error: ${error}` });
  }
};

export const getConversation = async (req: Request, res: Response) => {
  try {
    const userId = req.headers["x-user-id"];
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

export const saveMessage = async (req: Request, res: Response) => {
  try {
    const { conversationId, role, content } = req.body;
    const userId = req.headers["x-user-id"];

    if (typeof userId !== "string") {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }

    if (
      typeof conversationId !== "string" ||
      !mongoose.Types.ObjectId.isValid(conversationId)
    ) {
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
    const messages = await Message.find({ conversationId }).sort({
      createdAt: 1,
    });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ error: `Save message error: ${error}` });
  }
};

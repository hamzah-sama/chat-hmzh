import { Request, Response } from "express";
import axios from "axios";
import { graph } from "../graph/index.ts";
import mongoose from "mongoose";
import { addMessages } from "../config/memory.ts";

export const agent = async (req: Request, res: Response) => {
  try {
    const { prompt, conversationId } = req.body;
    const userId = req.headers["x-user-id"];

    if (
      typeof userId !== "string" ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res.status(401).json({
        message: "Invalid user ID",
      });
    }
    if (
      typeof prompt !== "string" ||
      !prompt.trim() ||
      typeof conversationId !== "string" ||
      !mongoose.Types.ObjectId.isValid(conversationId)
    ) {
      return res.status(400).json({
        error: "Invalid prompt or conversationId",
      });
    }

    await addMessages(conversationId, prompt, "user");

    const { data: userMessage } = await axios.post(
      `${process.env.CHAT_SERVICE}/create-message`,
      {
        conversationId,
        role: "user",
        content: prompt,
      },
      {
        timeout: 10000,
        headers: {
          "x-user-id": userId,
        },
      },
    );

    const result = await graph.invoke({ prompt, conversationId });

    await addMessages(conversationId, result.aiResponse, "assistant");

    const { data: assistantMessage } = await axios.post(
      `${process.env.CHAT_SERVICE}/create-message`,
      {
        conversationId,
        role: "assistant",
        content: result.aiResponse,
      },
      {
        timeout: 10000,
        headers: {
          "x-user-id": userId,
        },
      },
    );

    res.status(200).json({
      userMessage,
      assistantMessage,
    });
  } catch (error) {
    if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      return res.status(504).json({
        error: "Chat service timeout",
      });
    }
    console.error(error);

    res.status(500).json({
      error: "Agent request failed",
    });
  }
};

import { Request, Response } from "express";
import axios from "axios";
import { graph } from "../graph/index.ts";
import mongoose from "mongoose";

export const agent = async (req: Request, res: Response) => {
  try {
    const { prompt, conversationId } = req.body;
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
    await axios.post(
      `${process.env.CHAT_SERVICE}/save-message`,
      {
        conversationId,
        role: "user",
        content: prompt,
      },
      {
        timeout: 10000,
      },
    );

    const result = await graph.invoke({ prompt, conversationId });

    res.status(200).json(result.aiResponse);
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

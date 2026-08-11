import { Request, Response } from "express";
import axios from "axios";
import { graph } from "../graph/index.ts";

export const agent = async (req: Request, res: Response) => {
  try {
    const { prompt, conversationId } = req.body;
    await axios.post(`${process.env.CHAT_SERVICE}/save-message`, {
      conversationId,
      role: "user",
      content: prompt,
    });

    const result = await graph.invoke({ prompt, conversationId });

    res.status(200).json(result.aiResponse);
  } catch (error) {
    res.status(500).json({ error: `agent error: ${error}` });
  }
};

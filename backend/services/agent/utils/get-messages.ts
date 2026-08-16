import axios from "axios";
import { Message } from "../types.ts";

export const getMessages = async (
  conversationId: string,
): Promise<Message[] | null> => {
  try {
    const { data } = await axios.get(
      `${process.env.CHAT_SERVICE}/get-messages/${conversationId}`,
    );

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

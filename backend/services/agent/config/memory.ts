import { redis } from "@app/shared";
import { getMessages } from "../utils/get-messages.ts";
import { MessageRole } from "../types.ts";

export const getMemory = async (conversationId: string) => {
  const key = `messages-${conversationId}`;
  const cache = await redis.get(key);
  if (cache) return JSON.parse(cache);

  const messages = await getMessages(conversationId);
  await redis.set(key, JSON.stringify(messages), "EX", 60 * 60 * 24);
  return messages;
};

export const addMessages = async (
  conversationId: string,
  content: string,
  role: MessageRole,
) => {
  const key = `messages-${conversationId}`;
  const rawMessages = await redis.get(key);
  const messages = rawMessages ? JSON.parse(rawMessages) : [];
  messages.push({ content, role });

  if (messages.lenght > 20) {
    messages.shift();
  }

  await redis.set(key, JSON.stringify(messages), "EX", 60 * 60 * 24);
};

import { getModel } from "../config/llm-models.ts";
import { AgentState } from "../types.ts";

export const chatAgent = async (state: AgentState) => {
  const llm = await getModel("chat");
  const systemPrompt = "Your name is chat hamzah, an intelligent AI Assistant";
  const response = await llm.invoke([
    {
      role: "system",
      content: systemPrompt,
    },
    {
      role: "user",
      content: state.prompt,
    },
  ]);

  return {
    ...state,
    aiResponse: response.content,
  };
};

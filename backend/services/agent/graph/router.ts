import { getModel } from "../config/llm-models.ts";
import { agentPrompt } from "../prompt/agent-prompt.ts";
import { AgentState } from "./state.ts";

export const agentRouter = async (state: AgentState) => {
  const llm = await getModel("router");
  const prompt = agentPrompt(state);

  const response = await llm.invoke(prompt);

  const content = response.content;

  if (typeof content !== "string") {
    throw new Error("Expected model response to be a string");
  }

  const agent = content.trim().toLowerCase();
  const validAgents = ["chat", "search", "coding", "pdf", "ppt", "vision"];

  return { ...state, agent: validAgents.includes(agent) ? agent : "chat" };
};

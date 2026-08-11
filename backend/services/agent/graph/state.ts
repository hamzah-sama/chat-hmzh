import { Annotation } from "@langchain/langgraph";
import { Agent } from "../types.ts";

export const agentState = Annotation.Root({
  prompt: Annotation<string>(),
  aiResponse: Annotation<string>(),
  agent: Annotation<Agent>(),
  conversationId: Annotation<string>(),
});

export type AgentState = typeof agentState.State;

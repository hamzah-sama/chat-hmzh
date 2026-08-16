import { agentState } from "./graph/state.ts";

export type Agent =
  | "chat"
  | "search"
  | "coding"
  | "pdf"
  | "ppt"
  | "vision"
  | "router";

export type AgentState = typeof agentState.State;

export type ModelAgent = Agent | "router";

export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  conversationId: string;
  role: MessageRole;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export type HistoryMessages = { role: "user" | "assistant"; content: string }[];

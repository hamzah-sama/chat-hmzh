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

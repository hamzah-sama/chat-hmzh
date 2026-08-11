import { getModel } from "../config/llm-models.ts";
import { AgentState } from "../types.ts";

export const visionAgent = async (state: AgentState) => {
  const llm = await getModel("chat");
};

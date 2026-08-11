import { getModel } from "../config/llm-models.ts";
import { AgentState } from "../types.ts";

export const searchAgent = async (state: AgentState) => {
  const llm = await getModel('search');
  const response = await llm.invoke(state.prompt);

  return {
    ...state,
    aiResponse: response.content,
  };
};

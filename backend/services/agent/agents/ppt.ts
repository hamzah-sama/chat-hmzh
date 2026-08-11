import { getModel } from "../config/llm-models.ts";
import { AgentState } from "../types.ts";

export const pptAgent = async (state: AgentState) => {
  const llm = await getModel('ppt');
  const response = await llm.invoke(state.prompt);

  return {
    ...state,
    aiResponse: response.content,
  };
};

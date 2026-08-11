import { getModel } from "../config/llm-models.ts";
import { AgentState } from "../types.ts";

export const pdfAgent = async (state: AgentState) => {
  const llm = await getModel('pdf');
  const response = await llm.invoke(state.prompt);

  return {
    ...state,
    aiResponse: response.content,
  };
};

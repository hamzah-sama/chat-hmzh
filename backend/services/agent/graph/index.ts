import { StateGraph, Annotation, START } from "@langchain/langgraph";
import { agentState } from "./state.ts";
import { agentRouter } from "./router.ts";
import { chatAgent } from "../agents/chat.ts";
import { searchAgent } from "../agents/search.ts";
import { codingAgent } from "../agents/coding.ts";
import { pdfAgent } from "../agents/pdf.ts";
import { pptAgent } from "../agents/ppt.ts";
import { visionAgent } from "../agents/vision.ts";

const workflow = new StateGraph(agentState)
  .addNode("router", agentRouter)
  .addNode("chat", chatAgent)
  .addNode("search", searchAgent)
  .addNode("coding", codingAgent)
  .addNode("pdf", pdfAgent)
  .addNode("ppt", pptAgent)
  .addNode("vision", visionAgent)

  .addEdge(START, "router")
  .addConditionalEdges(
    "router",
    (state) => {
      switch (state.agent) {
        case "chat":
          return "chat";
        case "search":
          return "search";
        case "coding":
          return "coding";
        case "pdf":
          return "pdf";
        case "ppt":
          return "ppt";
        case "vision":
          return "vision";
        default:
          return "chat";
      }
    },
    {
      chat: "chat",
      search: "search",
      coding: "coding",
      pdf: "pdf",
      ppt: "ppt",
      vision: "vision",
    },
  )
  .addEdge("search", "chat")
  .addEdge("coding", "__end__")
  .addEdge("pdf", "__end__")
  .addEdge("ppt", "__end__")
  .addEdge("vision", "__end__")
  .addEdge("chat", "__end__");

export const graph = workflow.compile();

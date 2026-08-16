import { ChatGroq } from "@langchain/groq";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ModelAgent } from "../types.ts";

const groqApiKey = process.env.GROQ_API_KEY;
const googleApikey = process.env.GOOGLE_API_KEY;

const groq = () => {
  if (!groqApiKey) {
    throw new Error(
      "GROQ_API_KEY environment variable is required for Groq models.",
    );
  }
  return new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: groqApiKey,
  });
};
const gemini = () => {
  if (!googleApikey) {
    throw new Error(
      "GOOGLE_API_KEY environment variable is required for gemini models.",
    );
  }
  return new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: googleApikey,
  });
};

export const getModel = async (agent: ModelAgent) => {
  switch (agent) {
    case "chat":
      return gemini();
    case "search":
      return groq();
    case "coding":
      return gemini();
    default:
      return groq();
  }
};

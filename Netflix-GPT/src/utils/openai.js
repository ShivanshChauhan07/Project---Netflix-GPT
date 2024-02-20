import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constant";

const key = import.meta.env.VITE_API_KEY;

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true,
});

export default openai;

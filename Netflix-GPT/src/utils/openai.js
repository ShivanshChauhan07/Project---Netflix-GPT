import OpenAI from "openai";

const key = import.meta.env.VITE_API_KEY;

const openai = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true,
});

export default openai;

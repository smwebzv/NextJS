import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT_KEY,
});
export const openAISmWeb = new OpenAIApi(configuration);
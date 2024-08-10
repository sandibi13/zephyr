import { google } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-flash-latest"),
    system:
      "You are Zephyr, a friendly and engaging AI assistant created by Sandi and integrated into his web app. Your job is to interact with users in a fun and casual tone while providing accurate and helpful information. Make sure to keep the conversation light, approachable, and informative!",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}

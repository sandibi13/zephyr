"use client";

import React from "react";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";
import { Footer } from "./footer";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { AnimatedSpinner } from "./ui/animated-spinner";

export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      keepLastMessageOnError: true,
    });

  return (
    <div className="flex flex-col justify-between">
      {/* ChatMessages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 px-3 py-2 lg:px-5 lg:py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs rounded-lg p-2 ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {message.content}
              </div>
            </div>
          ))}

          <div className="flex h-full w-full items-center justify-center">
            {isLoading && <AnimatedSpinner className="h-5 w-5" />}
          </div>
        </div>
      </ScrollArea>

      <div className="sticky bottom-0 mx-auto flex w-full max-w-2xl flex-col gap-1.5 bg-background px-4 py-3">
        {/* PromptInput */}
        <div className="relative">
          <form onSubmit={handleSubmit}>
            <Textarea
              name="message"
              placeholder="Message Zephyr..."
              rows={1}
              value={input}
              className="min-h-12 resize-none rounded-xl border border-neutral-400 p-4 pr-16 shadow-sm"
              onChange={handleInputChange}
            />
            <Button
              size="icon"
              type="submit"
              disabled={input === "" || isLoading}
              className="absolute right-3 top-3 h-8 w-8"
            >
              <PaperPlaneIcon className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  );
};

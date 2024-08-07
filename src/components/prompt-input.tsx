import React from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

export const PromptInput = () => {
  return (
    <div className="sticky bottom-0 mx-auto flex w-full max-w-2xl flex-col gap-1.5 bg-background px-4 py-3">
      <div className="relative">
        <Textarea
          placeholder="Message Zephyr..."
          rows={1}
          className="min-h-12 resize-none rounded-2xl border border-neutral-400 p-4 pr-16 shadow-sm"
        />
        <Button size="icon" className="absolute right-3 top-3 h-8 w-8">
          <PaperPlaneIcon className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
      <p className="text-center text-xs font-medium text-neutral-700">
        Zephyr can make mistakes. Consider checking important information.
      </p>
    </div>
  );
};

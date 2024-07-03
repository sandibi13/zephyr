import { Button } from "@/components/ui/button";
import { AvatarIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";

export default function ChatPage() {
  return (
    <>
      <header className="hidden md:block lg:block">
        <div className="sticky top-0 p-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost">
              <div className="flex items-center justify-between space-x-1">
                <h2 className="font-medium text-lg">ZephyrAI</h2>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full">
              <AvatarIcon className="h-7 w-7" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex items-center justify-center h-full w-full">
        <h1>Chat Page</h1>
      </div>
    </>
  );
}

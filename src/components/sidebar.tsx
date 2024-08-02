import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Pencil2Icon, ViewVerticalIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

export const Sidebar = () => {
  return (
    <div className="hidden flex-col gap-2 border-r bg-muted/10 text-foreground md:flex lg:flex">
      <div className="sticky top-0 h-16 w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <ViewVerticalIcon className="h-5 w-5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Sidebar</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="ghost">
                <Link href="/chat">
                  <Pencil2Icon className="h-5 w-5" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>New Chat</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Chat History */}

      {/* Upgrade Plan Button */}
    </div>
  );
};

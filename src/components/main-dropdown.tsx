import React from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon, StarIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./icons";

export const MainDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <div className="flex items-center justify-between space-x-1">
            <h1 className="text-lg font-medium">Zephyr</h1>
            <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <span className="flex place-items-center gap-2">
              <StarIcon className="h-4 w-4" /> Zephyr Plus
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <span className="flex place-items-center gap-2">
              <Icons.Zap className="h-4 w-4" />
              Zephyr
            </span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <span className="flex items-center gap-2">
              <Icons.DashedMessageCircle className="h-4 w-4" /> Temporary chat
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

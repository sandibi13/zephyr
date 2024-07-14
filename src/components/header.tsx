import React from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="hidden md:block lg:block">
      <div className="sticky top-0 p-3">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm">
            <div className="flex items-center justify-between space-x-1">
              <h1 className="text-lg font-medium">Zephyr</h1>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/sandibi13.png" />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/">Homepage</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

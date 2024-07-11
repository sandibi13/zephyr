import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function ChatPage() {
  return (
    <>
      <header className="hidden md:block lg:block">
        <div className="sticky top-0 mb-4 p-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm">
              <div className="flex items-center justify-between space-x-1">
                <h1 className="text-lg font-medium">Zephyr</h1>
                <ChevronDownIcon className="h-4 w-4" />
              </div>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/sandibi13.png" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex h-full w-full items-center justify-center">
        <h1>Chat Page</h1>
      </div>
    </>
  );
}

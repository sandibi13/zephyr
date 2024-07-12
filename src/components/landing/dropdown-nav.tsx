import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { links } from "~/constants";
import Link from "next/link";

export const DropdownNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="focus:outline-none focus:ring-1 md:hidden"
          size="icon"
          variant="outline"
        >
          <HamburgerMenuIcon className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <div className="py-1">
          {links.map(({ name, href }) => (
            <DropdownMenuItem key={name} asChild>
              <Link href={href}>{name}</Link>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

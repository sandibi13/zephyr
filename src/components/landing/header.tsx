import { Icons } from "~/components/icons";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { links } from "~/constants";
import { DropdownNav } from "./dropdown-nav";

export const Header = () => {
  return (
    <header className="px-4 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <DropdownNav />
        <Link
          className="flex items-center justify-center text-xl font-medium"
          href="/"
        >
          <Icons.ChatBot className="mr-2 h-5 w-5" /> Zephyr
        </Link>
        <nav className="ml-10 hidden gap-4 sm:gap-6 md:flex">
          {links.map(({ name, href }) => (
            <Link
              key={name}
              className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-muted-foreground"
              href={href}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <Button variant="secondary" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

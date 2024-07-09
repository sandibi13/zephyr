import { Icons } from "~/components/icons";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="px-4 py-4 lg:py-6">
      <div className="container flex items-center gap-2 p-0">
        <Link
          className="flex items-center justify-center text-xl font-medium"
          href="/"
        >
          <Icons.BotIcon className="mr-2 h-5 w-5" /> ZephyrAI
        </Link>
        <div className="ml-auto">
          <Button variant="secondary" asChild>
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

import * as React from "react";
import { Button } from "./ui/button";
import {
  ChevronDownIcon,
  HamburgerMenuIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="block md:hidden lg:hidden">
      <div className="sticky top-0 p-3">
        <div className="flex items-center justify-between">
          <Button size="icon" variant="ghost">
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>

          <Button variant="ghost">
            <div className="flex items-center justify-between space-x-1">
              <h2 className="font-medium text-lg">ZephyrAI</h2>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </Button>

          <Button size="icon" variant="ghost">
            <Link href="/chat">
              <Pencil2Icon className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

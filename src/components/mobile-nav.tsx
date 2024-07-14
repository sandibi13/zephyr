import * as React from "react";
import { Button } from "./ui/button";
import {
  ChevronDownIcon,
  HamburgerMenuIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const MobileNav = () => {
  return (
    <nav className="block md:hidden lg:hidden">
      <div className="sticky top-0 p-2.5">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <HamburgerMenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">{/* Sheet content */}</SheetContent>
          </Sheet>

          <Button variant="ghost" size="sm">
            <div className="flex items-center justify-between space-x-1">
              <h1 className="text-lg font-medium">Zephyr</h1>
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

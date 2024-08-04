import * as React from "react";
import { Button } from "./ui/button";
import {
  ChevronDownIcon,
  HamburgerMenuIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { validateRequest } from "~/lib/auth/validate-request";
import { UpgradeCard } from "./ui/upgrade-card";
import { ProfileDropdown } from "./profile-dropdown";
import Link from "next/link";

export const MobileNav = async () => {
  const { user } = await validateRequest();

  return (
    <nav className="block md:hidden lg:hidden">
      <div className="sticky top-0 h-16 w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <HamburgerMenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <SheetHeader className="sticky flex items-center pt-4">
                <Button variant="outline" size="default" className="w-full">
                  <Link
                    href="/chat"
                    className="flex flex-row items-center justify-between gap-2"
                  >
                    <Pencil2Icon className="h-5 w-5" />
                    New chat
                  </Link>
                </Button>
              </SheetHeader>

              {/* Chat history */}

              <SheetFooter className="sticky mt-auto">
                <UpgradeCard />
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Button variant="ghost" size="sm">
            <div className="flex items-center justify-between space-x-1">
              <h1 className="text-lg font-medium">Zephyr</h1>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </Button>

          {user ? (
            <ProfileDropdown avatar={user.avatar} email={user.email} />
          ) : null}
        </div>
      </div>
    </nav>
  );
};

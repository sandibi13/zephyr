import React from "react";
import { Button } from "./ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ProfileDropdown } from "./profile-dropdown";
import { validateRequest } from "~/lib/auth/validate-request";

export const Header = async () => {
  const { user } = await validateRequest();

  return (
    <header className="hidden md:block lg:block">
      <div className="sticky top-0 h-16 w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="sm">
            <div className="flex items-center justify-between space-x-1">
              <h1 className="text-lg font-medium">Zephyr</h1>
              <ChevronDownIcon className="h-4 w-4" />
            </div>
          </Button>

          {user ? (
            <ProfileDropdown
              avatar={user.avatar}
              email={user.email}
              className="ml-auto"
            />
          ) : null}
        </div>
      </div>
    </header>
  );
};

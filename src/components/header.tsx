import React from "react";
import { ProfileDropdown } from "./profile-dropdown";
import { validateRequest } from "~/lib/auth/validate-request";
import { MainDropdown } from "./main-dropdown";

export const Header = async () => {
  const { user } = await validateRequest();

  return (
    <header className="hidden md:block lg:block">
      <div className="sticky top-0 h-16 w-full px-4 py-3">
        <div className="flex items-center justify-between">
          <MainDropdown />

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

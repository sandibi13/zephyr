import { UserCircle2 } from "lucide-react";
import * as React from "react";
import { SidebarMobile } from "./sidebar-mobile";
import { ChatHistory } from "./chat-history";
import { SidebarToggle } from "./sidebar-toggle";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <SidebarMobile>
          <ChatHistory />
        </SidebarMobile>
        <SidebarToggle />
      </div>

      <div className="flex items-center justify-end space-x-2">
        <UserCircle2 />
      </div>
    </nav>
  );
};

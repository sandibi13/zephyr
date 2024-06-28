import React from "react";
import { Sidebar } from "./sidebar";
import { ChatHistory } from "./chat-history";

export const SidebarDesktop = () => {
  return (
    <Sidebar className="peer absolute inset-y-0 z-30 hidden -translate-x-full border-r bg-muted duration-300 ease-in-out data-[state=open]:translate-x-0 md:flex md:w-[220px] lg:flex lg:w-[250px] xl:w-[300px]">
      {/* @ts-ignore */}
      <ChatHistory />
    </Sidebar>
  );
};

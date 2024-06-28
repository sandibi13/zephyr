"use client";

import React from "react";
import { Button } from "./ui/button";
import { Sidebar } from "lucide-react";
import { useSidebar } from "@/hooks/use-sidebar";

export const SidebarToggle = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      className="-ml-2 hidden size-9 p-0 md:flex lg:flex"
      onClick={() => {
        toggleSidebar();
      }}
    >
      <Sidebar className="size-6" />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
};

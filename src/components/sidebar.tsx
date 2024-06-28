"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/hooks/use-sidebar";

export interface SidebarProps extends React.ComponentProps<"div"> {}

export const Sidebar = ({ className, children }: SidebarProps) => {
  const { isSidebarOpen, isLoading } = useSidebar();

  return (
    <div
      data-state={isSidebarOpen && !isLoading ? "open" : "closed"}
      className={cn(className, "h-full flex-col dark:bg-zinc-950")}
    >
      {children}
    </div>
  );
};

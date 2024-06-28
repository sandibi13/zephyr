import { Navbar } from "@/components/navbar";
import { SidebarDesktop } from "@/components/sidebar-desktop";
import { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col flex-1 bg-muted/50">
      <Navbar />
      <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
        <SidebarDesktop />
        {children}
      </div>
    </div>
  );
}

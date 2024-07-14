import { MobileNav } from "~/components/mobile-nav";
import { Sidebar } from "~/components/sidebar";
import React from "react";
import { Header } from "~/components/header";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <MobileNav />
        {children}
      </div>
    </div>
  );
}

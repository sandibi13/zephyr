import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between h-full w-full px-3 py-3">
        <Link href="/chat">Chat</Link>
        <ModeToggle />
      </div>

      <div className="flex items-center justify-center h-full w-full pt-60">
        <h1>Home Page</h1>
      </div>
    </div>
  );
}

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <br />
      <ModeToggle />
    </div>
  );
}

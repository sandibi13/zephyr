import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <br />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}

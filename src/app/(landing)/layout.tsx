import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <Header />
      {children}
      <div className="h-20" />
      <Footer />
    </div>
  );
}

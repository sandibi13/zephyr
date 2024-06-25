import { Sidebar } from "@/components/sidebar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}

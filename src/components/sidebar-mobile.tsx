import { ReactNode } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Sidebar } from "lucide-react";

export const SidebarMobile = ({ children }: { children: ReactNode }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="-ml-2 flex size-9 p-0 lg:hidden md:hidden"
        >
          <Sidebar className="size-6" />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[300px] flex-col p-0"
      >
        <Sidebar className="flex">{children}</Sidebar>
      </SheetContent>
    </Sheet>
  );
};

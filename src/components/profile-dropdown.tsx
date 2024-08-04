import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SignOut } from "./sign-out";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { GearIcon, HomeIcon } from "@radix-ui/react-icons";
import { Icons } from "./icons";

export const ProfileDropdown = ({
  email,
  avatar,
  className,
}: {
  email: string;
  avatar?: string | null;
  className?: string;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Avatar className="h-7 w-7">
          <AvatarImage
            src={
              avatar ??
              "https://api.dicebear.com/9.x/glass/svg?seed={email}" + email
            }
            alt="avatar"
          />
          <AvatarFallback>YO</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-muted-foreground">
          {email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <Link href="/settings" className="flex items-center gap-2">
              <GearIcon className="h-4 w-4" /> Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <Link href="/pricing" className="flex items-center gap-2">
              <Icons.Dollar className="h-4 w-4" /> Pricing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer text-muted-foreground"
            asChild
          >
            <Link href="/" className="flex items-center gap-2">
              <HomeIcon className="h-4 w-4" /> Homepage
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuLabel className="p-0">
          <SignOut />
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

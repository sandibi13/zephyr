"use client";

import { ExclamationTriangleIcon, ExitIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { toast } from "sonner";
import { signout } from "~/server/actions/auth";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { LoadingButton } from "./loading-button";

export const SignOut = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignout = async () => {
    setIsLoading(true);
    try {
      await signout();
      toast("Signed out successfully");
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message, {
          icon: (
            <ExclamationTriangleIcon className="h-4 w-4 text-destructive" />
          ),
        });
      }
    } finally {
      setOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger
        className="px-2 py-1.5 text-sm text-muted-foreground outline-none"
        asChild
      >
        <button className="flex items-center gap-2">
          <ExitIcon className="h-4 w-4" />
          Sign out
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xs">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center">
            Sign out from Zephyr?
          </AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the home page.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-center">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <LoadingButton loading={isLoading} onClick={handleSignout}>
            Continue
          </LoadingButton>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

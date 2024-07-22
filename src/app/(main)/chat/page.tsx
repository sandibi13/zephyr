import { redirect } from "next/navigation";
import React from "react";
import { Paths } from "~/constants";
import { validateRequest } from "~/lib/auth/validate-request";

export default async function ChatPage() {
  const { user } = await validateRequest();
  if (!user) redirect(Paths.SignIn);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1>Chat Page</h1>
    </div>
  );
}

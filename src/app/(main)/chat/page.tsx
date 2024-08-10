import { redirect } from "next/navigation";
import React from "react";
import { Chat } from "~/components/chat";
import { Paths } from "~/constants";
import { validateRequest } from "~/lib/auth/validate-request";

export default async function ChatPage() {
  const { user } = await validateRequest();
  if (!user) redirect(Paths.SignIn);

  return (
    <div>
      <Chat />
    </div>
  );
}

import { redirect } from "next/navigation";
import React from "react";
import { Paths } from "~/constants";
import { validateRequest } from "~/lib/auth/validate-request";

export default async function SettingsPage() {
  const { user } = await validateRequest();
  if (!user) redirect(Paths.SignIn);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1>Settings Page</h1>
    </div>
  );
}

import { redirect } from "next/navigation";
import React from "react";
import { SignIn } from "~/components/sign-in";
import { Paths } from "~/constants";
import { validateRequest } from "~/lib/auth/validate-request";

export default async function SignInPage() {
  const { user } = await validateRequest();
  if (user) redirect(Paths.Chat);

  return (
    <>
      <SignIn />
    </>
  );
}

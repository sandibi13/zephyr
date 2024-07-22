import { redirect } from "next/navigation";
import React from "react";
import { SignUp } from "~/components/sign-up";
import { Paths } from "~/constants";
import { validateRequest } from "~/lib/auth/validate-request";

export default async function SignUpPage() {
  const { user } = await validateRequest();
  if (user) redirect(Paths.Chat);

  return (
    <>
      <SignUp />
    </>
  );
}

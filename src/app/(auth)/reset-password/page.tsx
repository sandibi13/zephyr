import { redirect } from "next/navigation";
import React from "react";
import { ResetEmail } from "~/components/reset-email";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Paths } from "~/constants";
import { validateRequest } from "~/lib/auth/validate-request";

export default async function ResetPasswordPage() {
  const { user } = await validateRequest();
  if (user) redirect(Paths.Chat);

  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot password?</CardTitle>
          <CardDescription>
            Password reset link will be sent to your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetEmail />
        </CardContent>
      </Card>
    </>
  );
}

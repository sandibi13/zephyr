import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { VerifyCode } from "~/components/verify-code";

export default function VerifyEmailPage() {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Verify Email</CardTitle>
          <CardDescription>
            Verification code was sent to <strong>user.email</strong>. Check
            your spam folder if you can&apos;t find the email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VerifyCode />
        </CardContent>
      </Card>
    </>
  );
}

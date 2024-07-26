"use client";

import React, { useEffect, useRef } from "react";
import { SubmitButton } from "./submit-button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useFormState } from "react-dom";
import {
  verifyEmail,
  resendVerificationEmail as resendEmail,
  signout,
} from "~/server/actions/auth";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { toast } from "sonner";

export const VerifyCode = () => {
  const [verifyEmailState, verifyEmailAction] = useFormState(verifyEmail, null);
  const [resendState, resendAction] = useFormState(resendEmail, null);
  const codeFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (resendState?.success) {
      toast("Email sent!");
    }
    if (resendState?.error) {
      toast(resendState.error, {
        icon: <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />,
      });
    }
  }, [resendState?.error, resendState?.success]);

  useEffect(() => {
    if (verifyEmailState?.error) {
      toast(verifyEmailState.error, {
        icon: <ExclamationTriangleIcon className="h-5 w-5 text-destructive" />,
      });
    }
  }, [verifyEmailState?.error]);

  return (
    <div className="flex flex-col gap-2">
      <form ref={codeFormRef} action={verifyEmailAction}>
        <Label>Verification code</Label>
        <Input required id="code" name="code" type="code" className="mt-2" />
        <SubmitButton className="mt-4 w-full">Verify</SubmitButton>
      </form>
      <form action={resendAction}>
        <SubmitButton variant="secondary" className="w-full">
          Resend Code
        </SubmitButton>
      </form>
      <form action={signout}>
        <SubmitButton variant="link" className="p-0 font-normal">
          want to use another email? Log out now.
        </SubmitButton>
      </form>
    </div>
  );
};

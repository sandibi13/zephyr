"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useFormState } from "react-dom";
import { signin } from "~/server/actions/auth";
import { PasswordInput } from "./password-input";
import { SubmitButton } from "./submit-button";

export const SignIn = () => {
  const [state, formAction] = useFormState(signin, null);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Sign in to your account to chat with the AI
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full" asChild>
          <Link href="#">
            <DiscordLogoIcon className="mr-2 h-5 w-5" />
            Sign in with Discord
          </Link>
        </Button>
        <div className="my-2 flex items-center">
          <div className="flex-grow border-t border-muted" />
          <div className="mx-2 text-muted-foreground">or</div>
          <div className="flex-grow border-t border-muted" />
        </div>
        <form action={formAction} className="grid gap-4">
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              required
              placeholder="email@example.com"
              autoComplete="email"
              name="email"
              type="email"
            />
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <PasswordInput
              required
              placeholder="********"
              autoComplete="current-password"
              name="password"
            />
          </div>

          <div className="flex flex-wrap justify-between">
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link href="/sign-up">Not signed up? Sign up now.</Link>
            </Button>
            <Button variant="link" size="sm" className="p-0" asChild>
              <Link href="/reset-password">Forgot password?</Link>
            </Button>
          </div>

          {state?.fieldError ? (
            <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
              {Object.values(state.fieldError).map((err) => (
                <li className="ml-4" key={err}>
                  {err}
                </li>
              ))}
            </ul>
          ) : state?.formError ? (
            <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
              {state?.formError}
            </p>
          ) : null}
          <SubmitButton className="w-full">Sign In</SubmitButton>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

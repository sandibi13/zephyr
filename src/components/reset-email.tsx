import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export const ResetEmail = () => {
  return (
    <form className="space-y-4">
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

      <div className="flex flex-wrap justify-between">
        <Button variant="link" size="sm" className="p-0">
          <Link href="/sign-up">Not signed up? Sign up now.</Link>
        </Button>
      </div>

      <Button className="w-full">Reset password</Button>
      <Button variant="outline" className="w-full" asChild>
        <Link href="/">Cancel</Link>
      </Button>
    </form>
  );
};

import React from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export const VerifyCode = () => {
  return (
    <div className="flex flex-col gap-2">
      <form>
        <Label>Verification code</Label>
        <Input required id="code" name="code" type="code" className="mt-2" />
        <Button className="mt-4 w-full">Verify</Button>
      </form>
      <form>
        <Button variant="secondary" className="w-full">
          Resend Code
        </Button>
      </form>
      <form>
        <Button variant="link" className="p-0 font-normal">
          want to use another email? Log out now.
        </Button>
      </form>
    </div>
  );
};

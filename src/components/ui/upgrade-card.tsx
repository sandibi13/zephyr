import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";
import { Button } from "./button";
import Link from "next/link";

export const UpgradeCard = () => {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle>Upgrade to Pro</CardTitle>
        <CardDescription>
          Unlock unlimited access to all features.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" className="w-full">
          <Link href="/pricing">Upgrade</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Link from "next/link";

export const Feedback = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Share feedback!</CardTitle>
        <CardDescription>
          We value your input and welcome your feedback.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              required
              name="name"
              type="name"
              autoComplete="name"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              required
              name="email"
              type="email"
              autoComplete="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label>Feedback</Label>
            <Textarea required placeholder="Your thoughts and suggestions..." />
          </div>

          <Button className="w-full">Submit</Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/">Cancel</Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

import { CodeIcon } from "@radix-ui/react-icons";
import React from "react";
import { ModeToggle } from "~/components/mode-toggle";
import Link from "next/link";

const twitterUrl = "https://twitter.com/sandibi13";
const githubUrl = "https://github.com/sandibi13/zephyr";

export const Footer = () => {
  return (
    <footer className="mt-6 px-4 py-6">
      <div className="container flex items-center p-0">
        <CodeIcon className="mr-2 h-6 w-6" />
        <p className="text-sm">
          Built by{" "}
          <Link className="underline underline-offset-4" href={twitterUrl}>
            sandibi13
          </Link>
          . Get the source code from{" "}
          <Link className="underline underline-offset-4" href={githubUrl}>
            GitHub
          </Link>
          .
        </p>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
};

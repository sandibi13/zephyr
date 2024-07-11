import { CopyClip } from "~/components/landing/copy-clip";
import { Icons } from "~/components/icons";
import { Button } from "~/components/ui/button";
import {
  GitHubLogoIcon,
  PlusIcon,
  VercelLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const githubUrl = "https://github.com/sandibi13/zephyr";

export default function LandingPage() {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl flex-col items-center justify-center gap-4 py-10 text-center md:py-12">
        <div className="p-4">
          <div className="mb-10 flex items-center justify-center gap-3">
            <VercelLogoIcon className="h-14 w-14" />
            <PlusIcon className="h-8 w-8" />
            <Icons.ChatBot className="h-14 w-14" />
          </div>
          <h1 className="text-balance bg-gradient-to-tr from-black/70 via-black to-black/60 bg-clip-text text-center text-3xl font-bold text-transparent dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20 sm:text-5xl md:text-6xl lg:text-7xl">
            Generative AI Chatbot Application
          </h1>
          <p className="mb-10 mt-4 text-balance text-center text-muted-foreground md:text-lg lg:text-xl">
            Experience AI-driven conversations with our Next.js Chatbot,
            featuring LuciaAuth, Drizzle, TailwindCSS, ShadCN-UI, NeonDB and
            Vercel.
          </p>
          <div className="mb-10">
            <div className="mx-auto max-w-[430px]">
              <CopyClip text={"git clone " + githubUrl} />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a href={githubUrl}>
                <GitHubLogoIcon className="mr-1 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button size="lg" asChild>
              <Link href="/chat">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

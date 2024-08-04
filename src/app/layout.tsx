import "~/styles/globals.css";

import { fontSans } from "~/lib/fonts";
import type { Metadata, Viewport } from "next";
import { Providers } from "~/lib/providers";
import { cn } from "~/lib/utils";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Zephyr",
  description:
    "Your ultimate AI chatbot with a dynamic, generative UI experience",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">{children}</div>
          <Toaster position="top-center" theme="system" />
        </Providers>
      </body>
    </html>
  );
}

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { cn } from "~/lib/utils";
import Navbar from "~/components/Navbar";

import { ThemeProvider } from "~/components/ThemeProvider";

export const meta: MetaFunction = () => {
  return [
    { title: "PagePal" },
    { name: "description", content: "Chat with your documents in seconds" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        style={{ fontFamily: "Inter, sans serif" }}
        className={cn('min-h-screen font-sans antialiased')}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

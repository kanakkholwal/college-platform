import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { headers } from "next/headers";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";

import { redirect } from "next/navigation";
import { Provider } from "./client-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NITH - College Platform",
  description: "NITH - College Platform",
};

export const dynamic = 'force-dynamic';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getSession() as sessionType | null;
  const headerList = headers();
  const pathname = headerList.get("x-current-path") as string;
  const authorized = !!session?.user;

  if (!authorized && pathname !== "/login") {
    const redirectUrl = new URL(pathname);
    if (pathname !== "/login" && pathname !== "/") {
      redirectUrl.searchParams.set("redirect", pathname);
      return redirect("/login?" + redirectUrl.searchParams.toString());
    } else {
      return redirect("/login");
    }

  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
      >
        <Provider>{children} </Provider>
      </body>
    </html>
  )
}


import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

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


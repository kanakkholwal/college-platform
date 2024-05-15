import { cn } from "@/lib/utils";
import Unauthorized from "@/screens/unauthorized";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";
import { Provider, ThemeProvider } from "./client-provider";
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
  const session = await getSession() as sessionType | null
  const authorized = !!session?.user;

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          themes={['light', 'dark']}
        >
          <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 @container space-y-4">
            {authorized ? <Provider>{children} </Provider> : <Unauthorized />}
          </main>

        </ThemeProvider>
      </body>
    </html>
  )
}


import { cn } from "@/lib/utils";
import Unauthorized from "@/screens/unauthorized";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { getSession } from "src/lib/auth";
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
  const session = await getSession();
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
          <Provider>
            {authorized ? children : <Unauthorized />}
          </Provider>

        </ThemeProvider>
      </body>
    </html>
  )
}


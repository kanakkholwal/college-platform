import { cn } from "@/lib/utils";
import Unauthorized from "@/screens/unauthorized";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
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
          <Provider>
            <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 @container space-y-4">
              <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
                <h1 className="fixed left-0 top-0 flex w-full justify-center font-bold text-xl border-b border-gray-300 bg-gradient-to-b from-primary/5 py-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-white/20 lg:p-4 lg:dark:bg-zinc-800/30">
                  <Link href="/" className="hover:text-primary">
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                  </Link>
                </h1>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
                  <div className="flex items-center gap-5">
                    <Link href="https://x.com/kanakkholwal" className={" hover:text-primary hover:-translate-y-1 ease-in duration-300 flex justify-center items-center h-8 icon"}>
                      <RiTwitterXFill className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/kanak-kholwal" className={" hover:text-primary hover:-translate-y-1 ease-in duration-300 flex justify-center items-center h-8 icon"}>
                      <FiLinkedin className="w-5 h-5" />
                    </Link>
                    <Link href="https://github.com/kanakkholwal" className={" hover:text-primary hover:-translate-y-1  ease-in duration-300 flex justify-center items-center h-16 icon"}>
                      <LuGithub className="w-5 h-5" />
                    </Link>
                    <Link href="https://instagram.com/kanakkholwal" className={" hover:text-primary hover:-translate-y-1  ease-in duration-300 flex justify-center items-center h-16 icon"}>
                      <BsInstagram className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
              {authorized ? children : <Unauthorized />}
            </main>
          </Provider>

        </ThemeProvider>
      </body>
    </html>
  )
}


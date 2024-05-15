// provider.tsx
"use client";
import { Button } from '@/components/ui/button';
import Aos from 'aos';
import "aos/dist/aos.css";
import { LogOut } from 'lucide-react';
import { SessionProvider, signOut } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import Link from "next/link";
import { Next13ProgressBar } from 'next13-progressbar';
import { useEffect } from "react";
import { Toaster as HotToaster } from "react-hot-toast";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { Gradient } from "whatamesh";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function SignOutButton() {

    return <Button onClick={() => signOut({ callbackUrl: "/", })} variant="default_light" size="sm"> Log Out<LogOut /></Button>

}
export function Provider({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    }, [])
    return <SessionProvider>
        <canvas id="gradient-canvas" data-transition-in className="fixed inset-0 -z-1" />
        <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
            <h1 className="fixed left-0 top-0 flex w-full justify-center font-bold text-xl border-b border-gray-300 bg-gradient-to-b from-primary/5 py-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-white/20 lg:p-4 lg:dark:bg-zinc-800/30">
                <Link href="/" className="hover:text-primary">
                    {process.env.NEXT_PUBLIC_WEBSITE_NAME}
                </Link>
            </h1>
            <div className="fixed bottom-0 left-0 flex gap-5 h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
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
                    <div className="border-r border-gray-300 dark:border-neutral-800 h-8" />
                    <Button onClick={() => signOut({ callbackUrl: "/", })} variant="default_light" size="sm"> Log Out<LogOut /></Button>
                </div>
            </div>
        </div>
        {children}
        <Next13ProgressBar height="4px" color="hsl(var(--primary))" options={{ showSpinner: true, trickle: true }} showOnShallow={true} />
        <HotToaster
            position="bottom-right"
            toastOptions={{
                // Define default options
                duration: 2500,
            }}
        />
    </SessionProvider>;
}
// provider.tsx
"use client";
import Aos from 'aos';
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Next13ProgressBar } from 'next13-progressbar';
import { useEffect } from "react";
import { Toaster as HotToaster } from "react-hot-toast";
import { Gradient } from "whatamesh";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
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
        <canvas id="gradient-canvas" data-transition-in className="fixed inset-0 -z-[1]" />
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 @container space-y-4">
        {children}
        </main>
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
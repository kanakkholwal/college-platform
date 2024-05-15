// provider.tsx
"use client";
import Aos from 'aos';
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Next13ProgressBar } from 'next13-progressbar';
import { useEffect } from "react";
import { Toaster as HotToaster } from "react-hot-toast";



export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
export function Provider({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();


    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, [])
    return <SessionProvider>
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
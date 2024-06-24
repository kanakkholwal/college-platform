/* eslint-disable @next/next/no-img-element */
// provider.tsx
"use client";
import useNotificationChecker from "@/hooks/useNotificationChecker";
import Aos from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import Image from "next/image";
import { Next13ProgressBar } from "next13-progressbar";
import React, { useEffect, useState } from "react";
import { Toaster as HotToaster } from "react-hot-toast";
import { Gradient } from "whatamesh";
import fallbackImg from "./fallback.png";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function Provider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  useNotificationChecker();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
    try {
      // Perform canvas operations here
      const gradient = new Gradient();
      gradient.initGradient("#gradient-canvas");
      setIsLoaded(true);
      // If animation loading fails, set isLoaded to false
    } catch (error) {
      setIsLoaded(false);
    }
  }, []);
  return (
    <SessionProvider>
      {isLoaded ? (
        <canvas
          id="gradient-canvas"
          data-transition-in
          className="fixed inset-0 -z-[1]"
        />
      ) : (
        <Image
          width={1920}
          height={1280}
          src={fallbackImg}
          className="fixed inset-0 -z-[1]"
          alt="Fallback"
        />
      )}
      {children}
      <Next13ProgressBar
        height="4px"
        color="hsl(var(--primary))"
        options={{ showSpinner: true, trickle: true }}
        showOnShallow={true}
      />
      <HotToaster
        position="bottom-right"
        toastOptions={{
          // Define default options
          duration: 2500,
        }}
      />
      <div className="fixed bottom-2 right-2 left-auto top-auto z-50 flex gap-1 items-center">
        <span>
          <img
            height={20}
            width={80}
            src="https://visitor-badge.laobi.icu/badge?page_id=nith_portal.visitor-badge"
            alt="Visitor counter"
            className="inline-block font-inherit h-4"
          />
        </span>
      </div>
    </SessionProvider>
  );
}

import Navbar from "@/components/common/navbar";
import type { Metadata } from "next";

import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";

export const metadata: Metadata = {
    title: "NITH - College Platform",
    description: "NITH - College Platform",
};

export const dynamic = 'force-dynamic';


type LayoutProps = Readonly<{
    children: React.ReactNode;
}>

export default async function Layout({ children }: LayoutProps) {
    const session = await getSession() as sessionType | null
    console.log(session);
    
    return <div className="flex min-h-screen flex-col items-center justify-start p-6 md:p-12 lg:p-24 @container space-y-16">
        <Navbar />
        {children}
    </div>

}


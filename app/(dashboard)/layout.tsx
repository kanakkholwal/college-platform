import Navbar from "@/common/navbar";
import Unauthorized from "@/screens/unauthorized";
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
    const authorized = !!session?.user;
    if (!authorized)
        return <Unauthorized />

    return <>
        <Navbar />
        {children}
    </>
}


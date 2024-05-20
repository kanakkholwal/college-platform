
import { authOptions } from "app/api/auth/[...nextauth]/options";
import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "CR Dashboard",
    description: "NITH Portal Dashboard",

}


export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions);
    console.log(session);

    if (!session) {
        return redirect('/login')

    }

    if (!session.user.roles.includes('cr') && !session.user.roles.includes('faculty') && !session.user.roles.includes('admin')) {
        return redirect('/dashboard')
    }
    return <>
        {children}
    </>

}
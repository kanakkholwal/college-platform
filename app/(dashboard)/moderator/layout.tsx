import { redirect } from "next/navigation";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";

export default async function CommunityLayout({ children }: { children: React.ReactNode }) {

    const session = await getSession() as sessionType;
    const isModerator = session?.user?.roles?.includes('moderator') || session?.user?.roles?.includes('admin');

    if (!isModerator)
        return redirect(`/${session.user.roles[0]}`)

    return <div className="flex min-h-screen h-full w-full flex-col items-center justify-start @container/layout-0 max-w-[1680px] mx-auto px-3">
        <div className="flex w-full mt-8 gap-4">
            {/* <Sidebar /> */}
            <main className="flex-1 @container flex-col items-center justify-start space-y-4">
                {children}
            </main>
        </div>
    </div>

}
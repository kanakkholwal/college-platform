import EmptyArea from "@/components/common/empty-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GrAnnounce } from "react-icons/gr";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";

export default async function Dashboard() {
    const session = await getSession() as sessionType;


    return (<>
        <div className="bg-white/20 backdrop-blur-lg mt-5 rounded-lg p-4 @container/polls">
            <div className="w-full flex justify-between items-center whitespace-nowrap gap-2">
                <h3 className="text-xl font-semibold">Announcements</h3>
                <Button variant="default_light" size="sm" asChild>
                    <Link href="/announcements/create">Create Announcement</Link>
                </Button>
            </div>
            <EmptyArea Icon={GrAnnounce} title="No announcements" description="There are no announcements at the moment." />
        </div>

    </>)
}

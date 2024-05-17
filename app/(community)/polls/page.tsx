import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";
import CreatePoll from "./create-poll";

export default async function Dashboard() {
    const session = await getSession() as sessionType;

    return (<Tabs defaultValue="opened" className="w-full">
        <TabsList className="w-full h-14 px-2 gap-2">
            <TabsTrigger value="opened" className="text-md w-full">Open Polls</TabsTrigger>
            <TabsTrigger value="closed" className="text-md w-full">Closed Polls</TabsTrigger>
            <TabsTrigger value="by-you" className="text-md w-full">By You</TabsTrigger>
        </TabsList>
        <div className="bg-white/20 backdrop-blur-lg mt-5 rounded-lg p-4">
            <TabsContent value="opened">
                Open polls
            </TabsContent>
            <TabsContent value="closed">
                Closed polls
            </TabsContent>
            <TabsContent value="by-you">
                <div className="w-full flex justify-between items-center whitespace-nowrap gap-2">
                    <h3 className="text-xl font-semibold">Polls created by you</h3>
                    <CreatePoll/>
                </div>
            </TabsContent>
        </div>
    </Tabs>);
}

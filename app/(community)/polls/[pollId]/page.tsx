import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notFound } from "next/navigation";
import { getSession } from "src/lib/auth";
import { getPollById} from "src/lib/poll/actions";
import { PollType } from 'src/models/poll';
import { sessionType } from "src/types/session";

interface Props {
    params :{
        pollId:string
    }
}

export default async function Dashboard({params}:Props) {
    const session = await getSession() as sessionType;
    const poll = await getPollById(params.pollId);
    if(!poll){
        return notFound();
    }
    
    return (<div  className="w-full">
    </div>);
}

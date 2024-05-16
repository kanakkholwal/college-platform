import { TimeTable, sampleTimetableData } from "@/components/custom/time-table";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";
import {createTimeTable} from "src/lib/time-table/actions";

export default async function Dashboard() {
    const session = await getSession() as sessionType;

    return (<TimeTable timetableData={sampleTimetableData} mode="edit" saveTimetable={createTimeTable}/>);
}

import { TimeTable } from "@/components/custom/time-table";
import { StoreInitializer } from "@/components/custom/time-table-editor";
import { useTimetableStore } from "@/components/custom/time-table-store";
import { getSession } from "src/lib/auth";
import { createTimeTable } from "src/lib/time-table/actions";
import { sessionType } from "src/types/session";


export default async function Dashboard() {
    const session = await getSession() as sessionType;



    return (<>
        <StoreInitializer timetableData={useTimetableStore.getInitialState().timetableData} isEditing={false} />
        <TimeTable timetableData={useTimetableStore.getInitialState().timetableData} mode="edit" saveTimetable={createTimeTable} />
    </>)
}

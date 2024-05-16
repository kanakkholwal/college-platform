import { TimeTable } from "@/components/custom/time-table";
import { StoreInitializer } from "@/components/custom/time-table-editor";
import { useTimetableStore } from "@/components/custom/time-table-store";
import { notFound } from "next/navigation";
import { getSession } from "src/lib/auth";
import { getTimeTable } from "src/lib/time-table/actions";
import { sessionType } from "src/types/session";

interface Props {
    params: {
        department_code: string;
        year: number;
        semester: number;
    }
}

export default async function Dashboard({ params }: Props) {
    const session = await getSession() as sessionType;
    const { department_code, year, semester } = params;
    const timetableData = await getTimeTable(department_code, Number(year), Number(semester));
    if (!timetableData)
        return notFound();

    useTimetableStore.setState({
        timetableData: timetableData,
        isEditing: false,
        editingEvent: {
            dayIndex: 0,
            timeSlotIndex: 0,
            eventIndex: 0
        }
    })

    return (<>
        <StoreInitializer timetableData={timetableData} isEditing={false} />
        <TimeTable timetableData={timetableData} mode="view" />
    </>)
}

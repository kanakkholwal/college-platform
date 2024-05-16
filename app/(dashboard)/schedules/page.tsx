import {
    FormattedTimetable,
    TimeTable
} from "@/components/custom/time-table";
import { getSession } from "src/lib/auth";
import { sessionType } from "src/types/session";


const sampleTimetableData: FormattedTimetable = {
    department_code: "Computer Science",
    sectionName: "A",
    year: 3,
    semester: 1,
    schedule: [
        {
            day: 0, // Monday
            timeSlots: [
                {
                    startTime: 0, // 8:00 AM - 9:00 AM
                    endTime: 1, // 9:00 AM - 10:00 AM
                    events: [
                        {
                            title: "Data Structures",
                            description: "Lecture",

                        },
                        {
                            title: "Operating Systems",
                            description: "Lecture",
                        
                        },
                    ],
                },
                {
                    startTime: 1, // 9:00 AM - 10:00 AM
                    endTime: 2, // 10:00 AM - 11:00 AM
                    events: [
                        {
                            title: "Computer Networks",
                            description: "Tutorial",

                        },
                    ],
                },
                // More time slots...
            ],
        },
        {
            day: 1, // Tuesday
            timeSlots: [
                {
                    startTime: 2, // 10:00 AM - 11:00 AM
                    endTime: 3, // 11:00 AM - 12:00 PM
                    events: [
                        {
                            title: "Algorithms",
                            description: "Lecture",
                        },
                    ],
                },
                // More time slots...
            ],
        },
        // More days...
    ],
};

export default async function Dashboard() {
    const session = await getSession() as sessionType;

    return (<>
        <section id="hero" className="z-10 w-full max-w-6xl relative flex flex-col items-center justify-center  py-24 max-h-80 text-center">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-neutral-900 dark:text-neutral-100 whitespace-nowrap" data-aos="fade-up">
                Welcome back, <span className="text-primary">{session.user.firstName}</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            </p>
        </section>
        <TimeTable timetableData={sampleTimetableData} />
    </>)

}
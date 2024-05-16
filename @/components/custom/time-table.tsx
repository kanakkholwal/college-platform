"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Clock8 } from 'lucide-react';

export const daysMap = new Map([
    [0, "Monday"],
    [1, "Tuesday"],
    [2, "Wednesday"],
    [3, "Thursday"],
    [4, "Friday"],
    // [5, "Saturday"],
    // [6, "Sunday"],
]);

export const timeMap = new Map([
    [0, "8:00 AM - 9:00 AM"],
    [1, "9:00 AM - 10:00 AM"],
    [2, "10:00 AM - 11:00 AM"],
    [3, "11:00 AM - 12:00 PM"],
    [4, "12:00 PM - 1:00 PM"],
    [5, "1:00 PM - 2:00 PM"],
    [6, "2:00 PM - 3:00 PM"],
    [7, "3:00 PM - 4:00 PM"],
    [8, "4:00 PM - 5:00 PM"],
    [9, "5:00 PM - 6:00 PM"],
]);

interface FormattedTimetable {
    department: string;
    sectionName: string;
    year: number;
    semester: number;
    schedule: {
        day: number;
        timeSlots: {
            startTime: number;
            endTime: number;
            events: {
                title: string;
                description: string;
                startDateTime: Date;
                endDateTime: Date;
            }[];
        }[];
    }[];
}



interface TimetableProps {
    timetableData: FormattedTimetable;
}

export type { FormattedTimetable, TimetableProps };

function Event({ event }: { event: FormattedTimetable["schedule"][0]["timeSlots"][0]["events"][0] }) {
    return (
        <div>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link" className="p-4">{event.title}</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 text-left">
                        <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{event.title}</h4>
                            <p className="text-sm">
                                {event?.description}
                            </p>
                            <p className="flex items-center pt-2">
                                <Clock8 className="mr-2 h-4 w-4 opacity-70" />{" "}
                                <span className="text-xs text-muted-foreground">
                                    {event.startDateTime.toLocaleTimeString()} - {event.endDateTime.toLocaleTimeString()}
                                </span>
                            </p>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>

    );
}

export function TimeTable({ timetableData }: TimetableProps) {
    return (<>
            {/* <EditTimetableDialog timetableData={timetableData} onSave={(value) => console.log("onSave",value)} /> */}
        <Table className="mx-auto max-w-7xl bg-white/20 backdrop-blur-2xl rounded-lg overflow-hidden">
            <TableHeader>
                <TableRow>
                    <TableHead className={cn("sticky top-0 z-10 border-x text-center text-gray-700 min-w-40 whitespace-nowrap")}>
                        Time \ Day
                    </TableHead>
                    {Array.from(daysMap.entries()).map(([index, day]) => {
                        return (
                            <TableHead
                                key={index}
                                className={cn(
                                    "sticky top-0 z-10 border-x text-center ",
                                    new Date().getDay() === index ? "text-primary bg-primary/10" : " text-gray-700"
                                )}
                            >
                                {day}
                                {new Date().getDay() === index && <span className="text-primary text-xs italic">(Today)</span>}
                            </TableHead>
                        );
                    })}
                </TableRow>
            </TableHeader>
            <TableBody>
                {Array.from(timeMap.entries()).map(([index, time]) => (
                    <TableRow key={index}>
                        <TableCell className="sticky left-0 z-10 border-x text-center text-semibold whitespace-nowrap">{time}</TableCell>
                        {Array.from(daysMap.entries()).map((_, dayIndex) => (
                            <TableCell
                                key={`${index}-${dayIndex}`}
                                className={cn(
                                    "border-x text-center ",
                                    new Date().getDay() === dayIndex ? "text-primary bg-primary/10" : ""
                                )}
                            >
                                {/* Add your cell content here */}
                                {timetableData.schedule[dayIndex]?.timeSlots[index]?.events.map((event, eventIndex) => (
                                    <Event event={event} key={`${index}-${dayIndex}-event-${eventIndex}`} />
                                ))}
                                {timetableData.schedule[dayIndex]?.timeSlots[index]?.events.length === 0 && (<Badge className="text-xs" variant="success_light" size="sm">Free Time</Badge>)}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </>);
}
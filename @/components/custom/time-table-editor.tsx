"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from 'react';
import { daysMap, FormattedTimetable, timeMap } from './time-table';




interface EditTimetableDialogProps {
    timetableData: FormattedTimetable;
    onSave: (updatedTimetableData: FormattedTimetable) => void;
}

const EditTimetableDialog: React.FC<EditTimetableDialogProps> = ({ timetableData, onSave }) => {
    const [updatedTimetableData, setUpdatedTimetableData] = useState<FormattedTimetable>(timetableData);

    const handleSave = () => {
        onSave(updatedTimetableData);
    };

    const handleChange = (field: keyof FormattedTimetable, value: any) => {
        setUpdatedTimetableData((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleEventChange = (dayIndex: number, timeSlotIndex: number, eventIndex: number, field: keyof FormattedTimetable['schedule'][0]['timeSlots'][0]['events'][0], value: any) => {
        setUpdatedTimetableData((prevData) => {
            const updatedSchedule = [...prevData.schedule];
            const updatedTimeSlot = { ...updatedSchedule[dayIndex].timeSlots[timeSlotIndex] };
            const updatedEvents = [...updatedTimeSlot.events];
            updatedEvents[eventIndex] = { ...updatedEvents[eventIndex], [field]: value };
            updatedTimeSlot.events = updatedEvents;
            updatedSchedule[dayIndex].timeSlots[timeSlotIndex] = updatedTimeSlot;
            return { ...prevData, schedule: updatedSchedule };
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Edit Timetable</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="text-xl font-semibold">Edit Timetable</div>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label htmlFor="department" className="text-right">
                            Department
                        </Label>
                        <Input id="department" value={updatedTimetableData.department} className="col-span-3" onChange={(e) => handleChange('department', e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label htmlFor="sectionName" className="text-right">
                            Section
                        </Label>
                        <Input id="sectionName" value={updatedTimetableData.sectionName} className="col-span-3" onChange={(e) => handleChange('sectionName', e.target.value)} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label htmlFor="year" className="text-right">
                            Year
                        </Label>
                        <Input id="year" type="number" value={updatedTimetableData.year} className="col-span-3" onChange={(e) => handleChange('year', parseInt(e.target.value))} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-2">
                        <Label htmlFor="semester" className="text-right">
                            Semester
                        </Label>
                        <Input id="semester" type="number" value={updatedTimetableData.semester} className="col-span-3" onChange={(e) => handleChange('semester', parseInt(e.target.value))} />
                    </div>
                    <Separator className="my-4" />
                    {updatedTimetableData.schedule.map((daySchedule, dayIndex) => (
                        <div key={dayIndex}>
                            <h3 className="text-lg font-semibold mb-2">{daysMap.get(daySchedule.day)}</h3>
                            {daySchedule.timeSlots.map((timeSlot, timeSlotIndex) => (
                                <div key={`${dayIndex}-${timeSlotIndex}`} className="mb-4">
                                    <h4 className="text-sm font-semibold mb-2">{timeMap.get(timeSlot.startTime)} - {timeMap.get(timeSlot.endTime)}</h4>
                                    {timeSlot.events.map((event, eventIndex) => (
                                        <div key={`${dayIndex}-${timeSlotIndex}-${eventIndex}`} className="mb-2">
                                            <div className="grid grid-cols-4 items-center gap-2">
                                                <Label htmlFor={`event-title-${dayIndex}-${timeSlotIndex}-${eventIndex}`} className="text-right">
                                                    Title
                                                </Label>
                                                <Input
                                                    id={`event-title-${dayIndex}-${timeSlotIndex}-${eventIndex}`}
                                                    value={event.title}
                                                    className="col-span-3"
                                                    onChange={(e) => handleEventChange(dayIndex, timeSlotIndex, eventIndex, 'title', e.target.value)}
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-2">
                                                <Label htmlFor={`event-description-${dayIndex}-${timeSlotIndex}-${eventIndex}`} className="text-right">
                                                    Description
                                                </Label>
                                                <Textarea
                                                    id={`event-description-${dayIndex}-${timeSlotIndex}-${eventIndex}`}
                                                    value={event.description}
                                                    className="col-span-3"
                                                    onChange={(e) => handleEventChange(dayIndex, timeSlotIndex, eventIndex, 'description', e.target.value)}
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-2">
                                                <Label htmlFor={`event-startTime-${dayIndex}-${timeSlotIndex}-${eventIndex}`} className="text-right">
                                                    Start Time
                                                </Label>
                                                <Input
                                                    id={`event-startTime-${dayIndex}-${timeSlotIndex}-${eventIndex}`}
                                                    type="datetime-local"
                                                    value={event.startDateTime.toISOString().slice(0, 16)}
                                                    className="col-span-3"
                                                    onChange={(e) => handleEventChange(dayIndex, timeSlotIndex, eventIndex, 'startDateTime', new Date(e.target.value))}
                                                />
                                            </div>
                                            <div className="grid grid-cols-4 items-center gap-2">
                                                <Label htmlFor={`event-endTime-${dayIndex}-${timeSlotIndex}-${eventIndex}`} className="text-right">
                                                    End Time
                                                </Label>
                                                <Input
                                                    id={`event-endTime-${dayIndex}-${timeSlotIndex}-${eventIndex}`}
                                                    type="datetime-local"
                                                    value={event.endDateTime.toISOString().slice(0, 16)}
                                                    className="col-span-3"
                                                    onChange={(e) => handleEventChange(dayIndex, timeSlotIndex, eventIndex, 'endDateTime', new Date(e.target.value))}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSave}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditTimetableDialog;
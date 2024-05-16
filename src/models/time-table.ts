import mongoose, { Document, Schema } from 'mongoose';
import { DEPARTMENTS_LIST } from 'src/constants/departments';

interface IEvent extends Document {
  title: string;
  description?: string;
  startDateTime: Date;
  endDateTime: Date;
}

const eventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
});

interface ITimeSlot extends Document {
  startTime: number;
  endTime: number;
  events: IEvent[];
}

const timeSlotSchema = new Schema<ITimeSlot>({
  startTime: { type: Number, required: true, min: 0, max: 9 }, // Index of the start time in timeMap
  endTime: { type: Number, required: true, min: 0, max: 9 }, // Index of the end time in timeMap
  events: [eventSchema]
});

interface IDaySchedule extends Document {
  day: number;
  timeSlots: ITimeSlot[];
}

const dayScheduleSchema = new Schema<IDaySchedule>({
  day: { type: Number, required: true, min: 0, max: 6 }, // Representing the day of the week (0-6)
  timeSlots: [timeSlotSchema]
});

interface ITimetable extends Document {
  department_code: string;
  sectionName: string;
  year: number;
  semester: number;
  schedule: IDaySchedule[];
  createdAt: Date;
  updatedAt: Date;
}

const timetableSchema = new Schema<ITimetable>({
  department_code: { type: String, required: true, enum: DEPARTMENTS_LIST.map(dept => dept.code) },
  sectionName: { type: String, required: true },
  year: { type: Number, required: true, min: 1, max: 5 },
  semester: { type: Number, required: true, min: 1, max: 10 },
  schedule: [dayScheduleSchema]
}, {
  timestamps: true
});
export type { ITimetable, IEvent, ITimeSlot, IDaySchedule };
const Timetable = mongoose.model<ITimetable>('Timetable', timetableSchema);

export default Timetable;


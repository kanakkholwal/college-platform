import mongoose, { Document, Schema } from 'mongoose';

interface ISchedule extends Document {
  course: mongoose.Types.ObjectId;
  instructor: mongoose.Types.ObjectId;
  classroom: mongoose.Types.ObjectId;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

const scheduleSchema = new Schema<ISchedule>({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
  classroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Classroom' },
  dayOfWeek: String,
  startTime: String,
  endTime: String,
});

const Schedule = mongoose.models.Schedule|| mongoose.model<ISchedule>('Schedule', scheduleSchema);

export default Schedule;

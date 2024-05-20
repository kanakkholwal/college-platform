import { DonutChart } from '@tremor/react';
import { updateAttendanceRecord } from "src/lib/attendance/personal.actions";
import { AttendanceRecordWithId } from 'src/models/attendance-record';
import UpdateAttendanceRecord from "./update-record";
interface AttendanceRecordProps {
  record: AttendanceRecordWithId,
  style?: React.CSSProperties
}
const ATTENDANCE_CRITERIA = 75;

export default function AttendanceRecord({ record, style }: AttendanceRecordProps) {

  const attendance = [
    {
      name: "Present",
      value: record.attendance.filter((a) => a.isPresent).length
    },
    {
      name: "Absent",
      value: record.attendance.filter((a) => !a.isPresent).length
    }
  ]
  return (
    <div className="flex flex-col p-3 gap-2 rounded-lg border-b border-border hover:bg-white/30 animate-in popup" style={style}>

      <div className="flex items-center gap-2 w-full justify-between flex-wrap">
        <div className="flex items-start flex-col">
          <h4 className="text-sm tracking-wide font-semibold text-gray-900 dark:text-white">
            {record.subjectName.replaceAll("&amp;", "&")}
          </h4>
          <p className="text-xs text-gray-600">{record.subjectCode}</p>
        </div>
        <div>
          <DonutChart
            data={attendance}
            category="value"
            index="name"
            colors={['emerald', 'amber']}
            className="w-16 h-16"
          />
        </div>
      </div>
      <p>
        Attendance: {record.attendance.filter((a) => a.isPresent).length}/{record.totalClasses}
      </p>
      <div className="flex item-baseline w-full">
        <p className="text-sm font-semibold text-gray-600">
          Status: {getAttendanceStatus(record)}
        </p>
        <UpdateAttendanceRecord updateAttendanceRecord={updateAttendanceRecord.bind(null, record._id)} />
      </div>
    </div>
  )


}

const attendancePercentage = (record: AttendanceRecordWithId) => {
  return ((record.attendance.filter((a) => a.isPresent).length / record.totalClasses) * 100)
};


const getAttendanceStatus = (record: AttendanceRecordWithId) => {
  const percentage = attendancePercentage(record);
  const classesAttended = record.attendance.filter((a) => a.isPresent).length;
  const remainingClasses = record.totalClasses - classesAttended;
  const requiredAttendance = Math.round(record.totalClasses * (ATTENDANCE_CRITERIA / 100));

  if (percentage >= ATTENDANCE_CRITERIA) {
    return `You are on track and cannot miss the next ${record.totalClasses - requiredAttendance
      } class(es).`;
  } else if (remainingClasses >= requiredAttendance - classesAttended) {
    return `You are behind and need to attend the next ${requiredAttendance - classesAttended
      } class(es) to get back on track.`;
  } else {
    return `You are behind and cannot meet the attendance criteria for this subject.`;
  }
};
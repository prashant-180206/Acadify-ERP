import React from "react";
// import { timetableData } from "./data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { loggedInTeacher } from "@/backend/authfuncs";
import { getTimetableForInstructor } from "@/backend/divisions";

const TimeTableGrid = async () => {
  const data = await loggedInTeacher();
  if (!data) {
    return <div className="flex items-center justify-center h-full"></div>;
  }
  const timetableData = await getTimetableForInstructor(data.id || 0);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const timeslots = [
    "8-9",
    "9-10",
    "10-11",
    "11-12",
    "12-1",
    "1-2",
    "2-3",
    "3-4",
  ];

  const getCellData = (day: string, timeslot: string) => {
    const entry = timetableData.find(
      (item) => item.day === day && item.timeslot === timeslot
    );
    if (entry) {
      return (
        <div>
          <div className="font-semibold">{entry.courseid}</div>
          <div className="text-xs text-muted-foreground">
            {entry.instructorname} ({entry.instructorid})
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="border-2 border-gray-400 rounded-2xl p-6">
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-24"></TableHead>
            {timeslots.map((slot) => (
              <TableHead
                key={slot}
                className="w-32 text-center overflow-hidden "
              >
                {slot}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {days.map((day) => (
            <TableRow key={day}>
              <TableCell className="w-24 font-bold">{day}</TableCell>
              {timeslots.map((slot) => (
                <TableCell
                  key={slot}
                  className="w-32 text-center text-sm overflow-hidden "
                >
                  {getCellData(day, slot)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimeTableGrid;

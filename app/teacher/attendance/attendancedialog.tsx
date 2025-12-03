// File: components/AttendanceDialogServer.tsx
import React from "react";
import AttendanceDialogClient from "./attendancedialogclient";
import { loggedInTeacher } from "@/backend/authfuncs";
import { getStudentsByTeacher } from "@/backend/divisions";
import { getCourseByName } from "@/backend/courses";

type Props = {
  courseName?: string;
  className?: string;
  date?: string;
  timeslot?: string;
};

export default async function AttendanceDialogServer({
  courseName,
  className,
  date,
  timeslot,
}: Props) {
  const data = await loggedInTeacher();
  if (!data) {
    return <div className="flex items-center justify-center h-full"></div>;
  }

  const [students, course] = await Promise.all([
    getStudentsByTeacher(data.id || 0),
    courseName ? getCourseByName(courseName) : Promise.resolve(null),
  ]);

  return (
    <div>
      <AttendanceDialogClient
        students={students}
        courseId={course?.course_id || 0}
        instructorId={data.id || 0}
        courseName={courseName || ""}
        className={className || ""}
        date={date || new Date().toISOString().split("T")[0]}
        timeslot={timeslot || ""}
      />
    </div>
  );
}

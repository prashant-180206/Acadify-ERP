import React from "react";
import LectureAttendanceCard from "./lec";
import { loggedInStudent } from "@/backend/authfuncs";
import { getLecturesForStudent } from "@/backend/timetable";

const Attendance = async () => {
  const studentData = await loggedInStudent();

  if (!studentData) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-lg">Please log in to view attendance</p>
      </div>
    );
  }

  const lectures = await getLecturesForStudent(
    studentData.rollNo || 1,
    studentData.dep_id || 101,
    studentData.semester || 1,
    studentData.class || "CS-K"
  );

  return (
    <main className="h-screen w-full bg-bg items-center">
      <h1 className="heading">Attendance</h1>
      <div className="f-col ">
        {lectures.length > 0 ? (
          lectures.map((lecture) => (
            <LectureAttendanceCard key={lecture.id} lec={lecture} />
          ))
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg">No lectures found</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Attendance;

import React from "react";
// import { recentLectures } from "./data";
import LectureAttendanceCard from "./lec";
import { loggedInTeacher } from "@/backend/authfuncs";
import { getTodaysLecturesForInstructor } from "@/backend/timetable";

const Attendance = async () => {
  const data = await loggedInTeacher();
  if (!data) {
    return <div className="flex items-center justify-center h-full"></div>;
  }
  const recentLectures = await getTodaysLecturesForInstructor(data.id || 0);
  return (
    <main className="h-screen w-full bg-bg items-center">
      <h1 className="heading">Attendance</h1>
      <div className="f-col ">
        {recentLectures.map((lecture) => (
          <LectureAttendanceCard
            key={lecture.courseid}
            course_name={lecture.course_name}
            class_name={lecture.division || "N/A"}
            timeslot={lecture.timeslot}
            date={lecture.day}
          />
        ))}
      </div>
    </main>
  );
};

export default Attendance;

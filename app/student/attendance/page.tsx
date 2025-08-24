import React from "react";
import { recentLectures } from "./data";
import LectureAttendanceCard from "./lec";

const Attendance = () => {
  return (
    <main className="h-screen w-full bg-bg items-center">
      <h1 className="heading">Attendance</h1>
      <div className="f-col ">
        {recentLectures.map((lecture) => (
          <LectureAttendanceCard key={lecture.id} lec={lecture} />
        ))}
      </div>
    </main>
  );
};

export default Attendance;

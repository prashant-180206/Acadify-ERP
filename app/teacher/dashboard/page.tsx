import { teacherDashboardData } from "@/backend/dashboard";
import { CircularLoader } from "@/components/chartradial";

import React from "react";

const Page = () => {
  const data = teacherDashboardData;

  return (
    <main className="bg-bg min-h-[100dvh] text-white">
      <h1 className="heading text-center text-2xl font-bold py-4">DashBoard</h1>

      <section className="flex flex-col md:grid grid-cols-5 grid-rows-2 min-h-[80vh] w-full p-10 pt-0 gap-10 text-txt font-semibold text-sm md:text-xl">
        {/* Lectures Today */}
        <div className="col-start-1 col-end-3 bg-bg-dark rounded-2xl p-4">
          <h2 className="text-lg font-bold mb-3">Lectures Today :</h2>
          <ul className="space-y-2">
            {data.lectures_today.map((lecture, idx) => (
              <li key={idx} className="flex justify-between  pb-1">
                <p>
                  {lecture.class} : {lecture.subject} {lecture.time}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* My Attendance */}
        <div className="col-start-3 col-span-1 bg-bg-dark rounded-2xl p-4 flex flex-col items-center justify-center">
          <CircularLoader
            totalVal={100}
            currentVal={data.my_attendance.percentage}
            size={160}
          />
          <p className="mt-3 font-semibold">My Attendance</p>
        </div>

        {/* Assignments */}
        <div className="col-span-3 col-start-1 row-start-2 text-sm md:text-xl bg-bg-dark rounded-2xl p-4">
          <h2 className="text-lg font-bold mb-3">Assignments :</h2>
          <ul className="space-y-2">
            {data.assignments.map((assignment, idx) => (
              <li key={idx} className="grid grid-cols-3  pb-1">
                <span>
                  {assignment.class} : {assignment.subject}
                </span>
                <span>{assignment.assignment_title}</span>
                <span>Due : {assignment.due_date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Division Info */}
        <aside className="col-start-4 col-span-2 row-start-1 row-span-2 bg-bg-dark rounded-2xl text-xl p-10">
          <h2 className="text-2xl text-center font-bold">
            {data.class_attendance.class}
          </h2>
          <div className="f-row flex-col md:flex-row justify-evenly my-4 ">
            <div className="relative w-42 h-42 flex items-center justify-center">
              <CircularLoader
                currentVal={data.class_attendance.present_students}
                totalVal={data.class_attendance.total_students}
                size={400}
              />
              {/* {data.class_attendance.attendance_percentage}% */}
            </div>
            <div className="pl-4 pt-4 text-sm md:text-lg space-y-1">
              <p>Total Students: {data.class_attendance.total_students}</p>
              <p>Present Students: {data.class_attendance.present_students}</p>
              <p>Attendance %: {data.class_attendance.attendance_percentage}</p>
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold mt-10">
              Queries of Students :
            </h3>
            {data.student_queries.pending.length === 0 ? (
              <p className="text-gray-400 mt-2">No Pending Queries</p>
            ) : (
              <ul className="mt-2 list-disc pl-5">
                {data.student_queries.pending.map((query, idx) => (
                  <li key={idx}>{query}</li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Page;

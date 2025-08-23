import React from "react";
import { class_attendance, student_queries, students } from "./data";
import { CircularLoader } from "@/components/chartradial";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const myClass = () => {
  return (
    <main className="bg-bg md:h-screen w-full">
      <h1 className="heading pb-0 mb-0">My Class</h1>
      <div className="f-row md:flex-row flex-col h-full items-start p-10 gap-10 flex-1/2">
        <div className="md:flex-2/3 h-5/6 overflow-auto no-scrollbar">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Roll No</TableHead>
                <TableHead className="text-left">Name</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, idx) => (
                <TableRow key={idx}>
                  <TableCell>{student.Roll_No}</TableCell>
                  <TableCell>{student.Name}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="default"
                      className="bg-green-400 hover:bg-green-500 text-white"
                    >
                      View Info
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <aside className="md:flex-1/3 h-5/6 bg-bg-dark rounded-2xl text-xl p-10">
          <h2 className="text-2xl text-center font-bold">
            {class_attendance.class}
          </h2>
          <div className="f-row flex-col md:flex-row justify-evenly my-4 ">
            <div className="relative w-42 h-42 flex items-center justify-center">
              <CircularLoader
                currentVal={class_attendance.present_students}
                totalVal={class_attendance.total_students}
                size={400}
              />
              {/* {class_attendance.attendance_percentage}% */}
            </div>
            <div className="pl-4 pt-4 text-sm md:text-lg space-y-1">
              <p>Total Students: {class_attendance.total_students}</p>
              <p>Present Students: {class_attendance.present_students}</p>
              <p>Attendance %: {class_attendance.attendance_percentage}</p>
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold mt-10">
              Queries of Students :
            </h3>
            {student_queries.pending.length === 0 ? (
              <p className="text-gray-400 mt-2">No Pending Queries</p>
            ) : (
              <ul className="mt-2 list-disc pl-5">
                {student_queries.pending.map((query, idx) => (
                  <li key={idx}>{query}</li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
};

export default myClass;

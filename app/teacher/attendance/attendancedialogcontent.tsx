"use client";

import React, { useState } from "react";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";
import { SimpleStudent } from "@/backend/divisions";

interface AttendanceDialogContentProps {
  students: SimpleStudent[];
}

const AttendanceDialogContent: React.FC<AttendanceDialogContentProps> = ({
  students,
}) => {
  // State to track attendance status (true = present)
  const [attendanceMap, setAttendanceMap] = useState<Record<string, boolean>>(
    {}
  );
  // Active tab: "present" or "absent"
  const [activeTab, setActiveTab] = useState<"present" | "absent">("present");

  const toggleAttendance = (prn: number) => {
    setAttendanceMap((prev) => ({
      ...prev,
      [prn]: !prev[prn],
    }));
  };

  const handleSubmit = () => {
    const data = students.map(({ PRN }) => ({
      PRN,
      isPresent: attendanceMap[PRN] || false,
    }));
    console.log("Submitted attendance:", data);
    // TODO: Call API to save attendance
  };

  const filteredStudents = students.filter((student) => {
    if (activeTab === "present") {
      return attendanceMap[student.PRN] === true;
    } else {
      return attendanceMap[student.PRN] !== true;
    }
  });

  return (
    <>
      <div className="px-6 pb-2">
        <div className="flex gap-4 mb-4 border-b">
          <button
            onClick={() => setActiveTab("present")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "present"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Mark For Present (
            {Object.values(attendanceMap).filter(Boolean).length})
          </button>
          <button
            onClick={() => setActiveTab("absent")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "absent"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Mark For Absent (
            {students.length -
              Object.values(attendanceMap).filter(Boolean).length}
            )
          </button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/5 text-left">Roll No</TableHead>
              <TableHead className="w-3/5 text-left">Name</TableHead>
              <TableHead className="w-1/5 text-center">Mark</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="text-center p-4 text-muted-foreground"
                >
                  No students to mark here.
                </TableCell>
              </TableRow>
            )}
            {students.map(({ PRN, Name, Roll_No }) => (
              <TableRow
                key={PRN}
                className="cursor-pointer hover:bg-blue-100"
                onClick={() => toggleAttendance(PRN)}
              >
                <TableCell className="text-left">{Roll_No}</TableCell>
                <TableCell className="text-left">{Name}</TableCell>
                <TableCell className="text-center">
                  {attendanceMap[PRN] === (activeTab === "present") ? (
                    <CheckCircle2
                      className="text-green-500 mx-auto"
                      size={22}
                    />
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <DialogFooter className="flex gap-4 justify-end px-6 pb-6">
        <Button
          variant="secondary"
          onClick={() => {
            setAttendanceMap({});
          }}
        >
          Reset
        </Button>
        <Button variant="default" onClick={handleSubmit}>
          Submit Attendance
        </Button>
      </DialogFooter>
    </>
  );
};

export default AttendanceDialogContent;

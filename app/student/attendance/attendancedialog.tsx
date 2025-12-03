"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { getAttendanceForCourse } from "./actions";

type AttendanceRecord = {
  date: string;
  marked: boolean;
};

const AttendanceDialog: React.FC<{ courseid: string }> = ({ courseid }) => {
  const [attendancedata, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await getAttendanceForCourse(courseid);

        if (result.success) {
          setAttendanceData(result.data);
        } else {
          setError(result.error || "Failed to fetch attendance data");
          // Fallback to mock data if database fetch fails
          const mockData: AttendanceRecord[] = [
            { date: "2025-11-28", marked: true },
            { date: "2025-11-29", marked: false },
            { date: "2025-12-02", marked: true },
            { date: "2025-12-03", marked: true },
            { date: "2025-12-04", marked: false },
          ];
          setAttendanceData(mockData);
        }
      } catch (err) {
        console.error("Error fetching attendance:", err);
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceData();
  }, [courseid]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full bg-green-400 font-semibold hover:bg-green-500 p-4 text-sm">
          View Attendance
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-bg p-10">
        <DialogTitle>Attendance for {courseid}</DialogTitle>
        <div className="">
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell className="font-semibold">Date</TableCell>
                <TableCell className="text-center font-semibold">
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={2} className="text-center p-4">
                    Loading attendance data...
                  </TableCell>
                </TableRow>
              )}
              {!loading && error && (
                <TableRow>
                  <TableCell
                    colSpan={2}
                    className="text-center p-4 text-red-500"
                  >
                    {error}
                  </TableCell>
                </TableRow>
              )}
              {!loading && !error && attendancedata.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={2}
                    className="text-center p-4 text-muted-foreground"
                  >
                    No attendance records found.
                  </TableCell>
                </TableRow>
              )}
              {!loading &&
                attendancedata.map(({ date, marked }) => (
                  <TableRow
                    key={date}
                    className="cursor-pointer hover:bg-blue-100"
                  >
                    <TableCell className="text-left">
                      {new Date(date).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-center pr-10">
                      {marked ? (
                        <Check
                          className="bg-green-300 rounded-full p-1 "
                          size={30}
                        />
                      ) : (
                        <X className="bg-red-400 rounded-full p-1 " size={30} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AttendanceDialog;

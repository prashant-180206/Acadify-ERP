import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AttendanceDialog from "./attendancedialog";
import ModifyAttendanceDialog from "./modifyattendanedialog";

interface LectureAttendanceCardProps {
  course_name: string;
  class_name: string;
  timeslot: string;
  date: string | Date;
  attendance_marked: boolean;
}

const LectureAttendanceCard: React.FC<LectureAttendanceCardProps> = ({
  course_name,
  class_name,
  timeslot,
  date,
  attendance_marked,
}) => {
  // Format date as ISO string (consistent across server/client)
  const dateString =
    typeof date === "string"
      ? date
      : new Date(date).toISOString().split("T")[0];

  return (
    <Card className=" w-full max-w-5xl p-0 mb-6 md:mx-10">
      <CardHeader className="flex flex-col md:flex-row justify-between items-center py-4">
        <div className="f-row justify-between w-3/6">
          <div>
            <CardTitle className="text-lg font-bold">{course_name}</CardTitle>
            <p className="text-sm text-muted-foreground">{class_name}</p>
          </div>
          <div className="text-right">
            <p className="text-md font-semibold">{timeslot}</p>
            <p className="text-xs text-muted-foreground">{dateString}</p>
          </div>
        </div>
        <CardContent className="flex justify-end gap-4">
          <ModifyAttendanceDialog />

          <AttendanceDialog />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default LectureAttendanceCard;

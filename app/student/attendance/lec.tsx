import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AttendanceDialog from "./attendancedialog";
import { Lecture } from "./data";
import { Progress } from "@/components/ui/progress";

const LectureAttendanceCard: React.FC<{ lec: Lecture }> = ({ lec }) => {
  return (
    <Card className=" w-5/6 max-w-5xl md:p-0 mb-6 md:mx-10">
      <CardHeader className="flex flex-col md:flex-row justify-between items-center py-4">
        <div className="f-col md:flex-row justify-between gap-2 mb-2 w-5/6">
          <CardTitle className="text-lg font-bold">{lec.course_name}</CardTitle>
          <p className="text-sm text-muted-foreground">{lec.class_name}</p>
          <Progress
            className="w-full md:w-2/6"
            value={(lec.lectures_attended / lec.total_lectures) * 100}
          />
        </div>
        <CardContent className="flex justify-end gap-4">
          <AttendanceDialog courseid={lec.id} />
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default LectureAttendanceCard;

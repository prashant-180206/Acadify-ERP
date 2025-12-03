import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { loggedInTeacher } from "@/backend/authfuncs";

// Utility to extract initials for avatar
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// Format number with thousand separator
const formatSalary = (salary: number) => salary.toString();

const TeacherProfilePage = async () => {
  const teacher = await loggedInTeacher();
  return (
    <div className="w-full md:p-10 flex-1/2 justify-center f-row items-start">
      <Card className="bg-bg-dark w-full md:max-w-250 rounded-none md:rounded-lg">
        <CardHeader className="pb-2 f-col">
          <CardTitle className="heading my-0 py-0">Profile Details</CardTitle>
          <CardDescription>Detailed information of the teacher</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <Avatar className="w-40 h-40 md:w-80 md:h-80">
              <AvatarFallback className="text-4xl bg-bg-main  font-bold">
                {getInitials(teacher?.firstName + " " + teacher?.lastName)}
              </AvatarFallback>
            </Avatar>

            {/* Profile Details */}
            <div className="flex items-center flex-col gap-2 text-sm md:text-lg flex-1">
              <div className="f-col items-start gap-4">
                <p className="font-semibold text-xl">
                  {teacher?.firstName} {teacher?.lastName}
                </p>
                <p>
                  ID: <span className="font-medium">{teacher?.id}</span>
                </p>
                <p>Gender: {teacher?.gender}</p>
                <p>Qualification: {teacher?.highestQualification}</p>
                <p>
                  Designation:{" "}
                  <Badge variant="outline">{teacher?.designation}</Badge>
                </p>
                <p>
                  Department:{" "}
                  <Badge variant="secondary">{teacher?.department}</Badge>
                </p>
                <p>
                  Email: <span className="text-blue-400">{teacher?.email}</span>
                </p>
                <p>Contact: {teacher?.contactNo}</p>
                {/* <p>Joined: {formatDate(teacher.)}</p> */}
                <p>Salary: ${formatSalary(teacher?.salary || 0)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherProfilePage;

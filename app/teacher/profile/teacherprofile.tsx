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

const teacher = {
  t_id: 101,
  name: "Dr. Alice Johnson",
  gender: "Female",
  qualification: "PhD in Computer Science",
  designation: "HOD",
  email: "alice.johnson@university.edu",
  contact_number: "+1 234-567-8900",
  join_date: "2015-06-15",
  department: "Computer Science",
  salary: 75000,
};

// Utility to extract initials for avatar
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// Format date consistently: YYYY-MM-DD format
const formatDate = (dateString: string) => dateString;

// Format number with thousand separator
const formatSalary = (salary: number) => salary.toString();

const TeacherProfilePage = () => {
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
                {getInitials(teacher.name)}
              </AvatarFallback>
            </Avatar>

            {/* Profile Details */}
            <div className="flex items-center flex-col gap-2 text-sm md:text-lg flex-1">
              <div className="f-col items-start gap-4">
                <p className="font-semibold text-xl">{teacher.name}</p>
                <p>
                  ID: <span className="font-medium">{teacher.t_id}</span>
                </p>
                <p>Gender: {teacher.gender}</p>
                <p>Qualification: {teacher.qualification}</p>
                <p>
                  Designation:{" "}
                  <Badge variant="outline">{teacher.designation}</Badge>
                </p>
                <p>
                  Department:{" "}
                  <Badge variant="secondary">{teacher.department}</Badge>
                </p>
                <p>
                  Email: <span className="text-blue-400">{teacher.email}</span>
                </p>
                <p>Contact: {teacher.contact_number}</p>
                <p>Joined: {formatDate(teacher.join_date)}</p>
                <p>Salary: ${formatSalary(teacher.salary)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherProfilePage;

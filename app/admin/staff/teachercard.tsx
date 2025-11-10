"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Mail, GraduationCap, Building2 } from "lucide-react";
import { AssignCoursesDialog } from "./assigncourse";

type Teacher = {
  id: number;
  first_name: string;
  last_name: string;
  department: number;
  email: string;
  highest_qualification: string;
};

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          {teacher.first_name + " " + teacher.last_name}
        </CardTitle>
        <CardDescription>Teacher ID: {teacher.id}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            Dept. ID: {teacher.department}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-gray-500" />
          <a
            href={`mailto:${teacher.email}`}
            className="text-sm text-blue-600 hover:underline"
          >
            {teacher.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            {teacher.highest_qualification}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <AssignCoursesDialog
          t_id={teacher.id}
          teacherName={teacher.first_name + " " + teacher.last_name}
        />
      </CardFooter>
    </Card>
  );
}

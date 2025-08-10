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
  t_id: number;
  name: string;
  department_id: number;
  email: string;
  qualification: string;
};

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Card className="w-full max-w-sm shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{teacher.name}</CardTitle>
        <CardDescription>Teacher ID: {teacher.t_id}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            Dept. ID: {teacher.department_id}
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
          <span className="text-sm text-gray-700">{teacher.qualification}</span>
        </div>
      </CardContent>
      <CardFooter>
        <AssignCoursesDialog t_id={teacher.t_id} teacherName={teacher.name} />
      </CardFooter>
    </Card>
  );
}

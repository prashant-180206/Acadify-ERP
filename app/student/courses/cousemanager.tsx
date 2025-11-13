// app/course-manager/page.tsx
import React from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import Courseinfo from "@/components/courseinfo"; // adjust path as needed
import { Course, getCoursesForStudent } from "@/backend/courses";
import Courseinfo from "./courseinfo";
import { loggedInStudent } from "@/backend/authfuncs";

type Props = {
  searchParams?: {
    course_id?: string;
    department?: string;
    semester?: string;
  };
};

// Server component (async)
export default async function CourseManager({ searchParams }: Props) {
  // optionally allow overriding dept/sem via search params, fallback to your hardcoded values

  const data = await loggedInStudent();
  const departmentId = Number(data?.dep_id ?? 101);
  const semester = Number(data?.semester ?? 1);

  // fetch server-side
  const courses: Course[] = await getCoursesForStudent(departmentId, semester);

  // determine selected course id from query param, fallback to first course if present
  const urlSelectedId = searchParams?.course_id
    ? Number(searchParams.course_id)
    : undefined;

  const selectedCourseId =
    urlSelectedId && courses.some((c) => c.course_id === urlSelectedId)
      ? urlSelectedId
      : courses.length > 0
      ? courses[0].course_id
      : undefined;

  const selectedCourse =
    courses.find((c) => c.course_id === selectedCourseId) || courses[0];

  return (
    <section className="f-row flex-col md:flex-row w-full h-auto md:h-full gap-10 items-start text-lg px-10 overflow-auto no-scrollbar ">
      <div className="flex flex-col gap-4 h-full no-scrollbar overflow-auto justify-start flex-1/3 w-full md:w-auto ">
        {courses.map((val) => {
          return (
            <Card key={val.course_id} className="w-full">
              <CardHeader>
                <CardTitle>{val.course_name}</CardTitle>
                <CardDescription>
                  {val.course_id} &nbsp; Semester: {val.semester}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                {/* Link to same page with course_id param - server will re-render */}
                <Link
                  href={`/student/courses?course_id=${val.course_id}&department=${departmentId}&semester=${semester}`}
                  className="no-underline"
                >
                  <Button className="rounded-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <section className="flex-2/3 h-full overflow-auto no-scrollbar rounded-2xl bg-bg-dark">
        {/* Courseinfo receives the selected course as prop (can be undefined) */}
        {selectedCourse ? <Courseinfo course={selectedCourse} /> : null}
      </section>
    </section>
  );
}

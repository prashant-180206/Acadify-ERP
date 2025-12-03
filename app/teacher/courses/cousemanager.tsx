// app/(your-route)/course-manager/page.tsx
import Link from "next/link";
import { DB_Course } from "./data";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Courseinfo can be a client component — that's fine to import into a server component.
import Courseinfo from "./courseinfo";
import { getCoursesByTeacherId } from "@/backend/courses";
import { loggedInTeacher } from "@/backend/authfuncs";

type Props = {
  searchParams?: { courseId?: string | string[] };
};

export default async function CourseManager({ searchParams }: Props) {
  const data = await loggedInTeacher();
  if (!data) {
    return <div className="flex items-center justify-center h-full"></div>;
  }

  const courses = await getCoursesByTeacherId(data.id || 0); // Replace 1 with the actual teacher ID
  // Parse courseId from search params (server-side)
  const courseIdParam = Array.isArray(searchParams?.courseId)
    ? searchParams?.courseId[0]
    : searchParams?.courseId;

  const selectedCourse: DB_Course =
    courses.find((c) => String(c.course_id) === courseIdParam) ?? courses[0];

  return (
    <section className="f-row flex-col md:flex-row w-full h-auto md:h-full gap-10 items-start text-lg px-10 overflow-auto no-scrollbar ">
      <div className="flex flex-col gap-4 h-full no-scrollbar overflow-auto justify-start flex-1/3 w-full md:w-auto ">
        {courses.map((val, idx) => {
          const href = `?courseId=${val.course_id}`;
          return (
            <Card key={idx} className="w-full">
              <CardHeader>
                <CardTitle>{val.course_name}</CardTitle>
                <CardDescription>
                  {val.course_id} Semester:{val.semester}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                {/* Link will perform a client navigation (if enabled) and update the URL with the courseId */}
                <Link href={href} className="no-underline">
                  <Button className="rounded-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <section className="flex-2/3 h-full overflow-auto no-scrollbar rounded-2xl bg-bg-dark ">
        {/* Render the selected course (server-side) */}
        <Courseinfo course={selectedCourse} />
      </section>
    </section>
  );
}

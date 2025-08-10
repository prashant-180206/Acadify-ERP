import { courses } from "@/backend/courses";
import { getDepById } from "@/backend/departments";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { CourseCard } from "./course";
import { Plus } from "lucide-react";
import { AddCourseDialog } from "./addcourse";

const Course = async ({ params }: { params: Promise<{ depid: string }> }) => {
  const { depid } = await params;
  const dep = getDepById(depid);

  return (
    <main className="p-6 space-y-6">
      {/* Department Title */}
      <h1 className="text-2xl text-main-dark font-bold text-center">
        {dep.name} — Course List
      </h1>

      {/* Semester Cards */}
      <div className="grid grid-cols-1  gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => {
          const semesterCourses = courses.filter(
            (c) => c.semester === semester
          );

          return (
            <div key={semester} className="">
              <h2 className="text-main-dark text-xl font-semibold mb-4">
                Semester {semester}
              </h2>

              <div>
                <section className=" f-row justify-start gap-6 overflow-auto no-scrollbar">
                  {semesterCourses.map((course) => (
                    <CourseCard
                      key={course.course_id}
                      course_name={course.course_name}
                      credits={course.credits}
                      num_lectures={course.num_lectures}
                      semester={course.semester}
                    />
                  ))}
                  <Card className="shadow-md f-col hover:shadow-lg min-w-60 h-55 transition-shadow">
                    <CardContent className="f-row">
                      <Plus size={50} className="text-txt" />
                    </CardContent>
                    <CardAction className="f-row w-full">
                      <AddCourseDialog />
                    </CardAction>
                  </Card>
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Course;

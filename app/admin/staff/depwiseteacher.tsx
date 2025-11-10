"use client";

import React from "react";
import { TeacherCard } from "./teachercard";

type Teacher = {
  id: number;
  first_name: string;
  last_name: string;
  department: number;
  email: string;
  highest_qualification: string;
};

type Props = {
  teachers: Teacher[];
  departments: { id: number; name: string }[];
};

export function TeachersByDepartment({ teachers, departments }: Props) {
  return (
    <div className="space-y-8 bg-bg py-6 px-4">
      {departments.map((dep) => {
        const depTeachers = teachers.filter((t) => t.department === dep.id);

        return (
          <section key={dep.id} className=" bg-bg">
            <h2 className="text-2xl font-semibold text-main-dark mb-4">
              {dep.name}
            </h2>
            <div>
              {depTeachers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {depTeachers.map((teacher) => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  No teachers in this department.
                </p>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}

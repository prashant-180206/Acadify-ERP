import React from "react";
import { TeachersByDepartment } from "./depwiseteacher";
import { getDepartments } from "@/backend/departments";
import { getTeachers } from "@/backend/teachers";

const Staff = async () => {
  const departments = await getDepartments();
  const teachers = await getTeachers();
  return (
    <main className="bg-bg-main">
      <TeachersByDepartment
        teachers={teachers}
        departments={departments.map((val) => {
          return { id: val.d_id, name: val.name };
        })}
      />
    </main>
  );
};

export default Staff;

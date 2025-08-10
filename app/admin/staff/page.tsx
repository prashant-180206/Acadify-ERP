import React from "react";
import { TeachersByDepartment } from "./depwiseteacher";
import { teachers } from "@/backend/teachers";
import { departments } from "@/backend/departments";

const Staff = () => {
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

import React from "react";
import CourseManager from "./cousemanager";

const Courses = () => {
  return (
    <main className="f-col bg-bg justify-start md:h-screen">
      <h1 className="heading  col-span-3 pb-4 mb-0">Courses</h1>
      <div className="w-full overflow-auto flex-1/2 pb-10">
        <CourseManager />
      </div>
    </main>
  );
};

export default Courses;

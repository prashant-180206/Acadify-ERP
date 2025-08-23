import React from "react";
import TimeTableGrid from "./table";

const TimeTable = () => {
  return (
    <main className="p-10 bg-bg min-h-screen w-full">
      <h1 className="heading pt-0 mt-0">Time Table</h1>
      <TimeTableGrid />
    </main>
  );
};
// Sample data: Each item may have course info or be empty for blank cells.

export default TimeTable;

import React from "react";
import AdminQueryBox from "./Abminpanel";

const QueryBox = () => {
  return (
    <main className="h-full w-full">
      <h2 className="text-center text-3xl text-main-dark font-semibold p-6">
        Admin SQL Query Box
      </h2>
      <AdminQueryBox />
    </main>
  );
};

export default QueryBox;

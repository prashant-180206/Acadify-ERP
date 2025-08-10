"use client";
import React, { useState } from "react";
import SqlEditor from "@/components/queryinput";
import { Button } from "@/components/ui/button";

// import SqlEditor from "@/components/SqlEditor";

export default function AdminQueryBox() {
  const [query, setQuery] = useState("");
  const schema = {
    users: ["id", "name", "email", "created_at"],
    orders: ["id", "user_id", "total", "status"],
  };

  const HandleSubmit = () => {
    console.log(query);
  };

  return (
    <div className=" f-row justify-evenly w-full  items-start h-[80vh] pb-10">
      <section className="w-5/12 f-col">
        <h1 className="w-full text-main-dark font-semibold pb-4">Query Box</h1>
        <SqlEditor
          schema={schema}
          onQueryChange={(query) => setQuery(query as any)}
          className="w-full border-2 p-6 rounded-2xl"
        />
        <p className="text-txt-muted my-2">
          Make Sure to add limit to the query as Data is Large
        </p>
        <Button
          className="bg-blue-400 hover:bg-blue-500 rounded-full p-5 text-xl"
          onClick={HandleSubmit}
        >
          Fire Query
        </Button>
      </section>
      <section className=" rounded-2xl w-1/2 h-full">
        <h1 className="w-full text-main-dark font-semibold pb-4">
          Query Result
        </h1>
        <div className="h-11/12 w-full bg-bg-dark rounded-2xl p-6 overflow-auto">
          grgggr
        </div>
      </section>
    </div>
  );
}

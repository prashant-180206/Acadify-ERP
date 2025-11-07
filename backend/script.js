import { supabase } from "../lib/supabase";
import { courses } from "./courses";

const addData = async () => {
  const { data, error } = await supabase.from("courses").insert(courses);
  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully:", data);
  }
};
await addData();

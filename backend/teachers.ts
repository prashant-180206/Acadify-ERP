"use server";

import { supabase } from "@/lib/supabase";

export const getTeachers = async () => {
  // return teachers;
  const { data, error } = await supabase
    .from('teachers')
    .select(`
      id,
      first_name,
      last_name,
      department,
      email,
      highest_qualification
    `);


  if (error) {
    console.error("Error fetching teachers:", error);
    return [];
  }
  return data;
}

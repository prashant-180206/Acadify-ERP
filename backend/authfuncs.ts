"use server"

import { StudentSchemaType } from "@/app/admin/add_student/schema";
import { TeacherSchemaType } from "@/app/admin/add_teacher/schema";
import { supabase } from "@/lib/supabase";
import { createClient } from "@/lib/supabaseServer";
// import { supabaseServer } from "@/lib/supabaseServer";

export async function addUser(email: string, password: string, role: string) {
    const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role: role.toLowerCase() },
    },
  });
  return { data, error };
}

export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function getUserData() {

  const sp = await createClient()

  const { data, error } = await sp.auth.getUser();
  console.log("getUserData data:", data, "error:", error);

  if (error) {
    console.error("getUserData error:", error);
    return null;
  }
  return data.user;
}

export async function loggedInStudent(){
  const user = await getUserData();
  const email = user?.email || "";
  console.log("Logged in student email:", email,user);
  if(!email) return null;
  const id = email.split("@")[0].split(".")[1];
  console.log("Logged in student ID:", id);
  const {data  } = await supabase
    .from("students")
    .select("*")
    .eq("id", id)
    .single();


  return data as StudentSchemaType | null;
}

export async function loggedInTeacher(){
  const user= await getUserData();
  const email = user?.email || "";
  if(!email) return null;
  const id = email.split("@")[0].split(".")[1];
  const {data } = await supabase
    .from("teachers")
    .select("*")
    .eq("id", id)
    .single();
  return data as TeacherSchemaType | null;
}


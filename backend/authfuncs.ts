"use server"

import { StudentSchemaType } from "@/app/admin/add_student/schema";
import { TeacherSchemaType } from "@/app/admin/add_teacher/schema";
import { createClient } from "@/lib/supabaseServer";

export async function addUser(email: string, password: string, role: string) {
    const supabase = await createClient();
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
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function getUserData() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error("getUserData error:", error);
      return null;
    }
    
    return data.user;
  } catch (error) {
    console.error("getUserData catch error:", error);
    return null;
  }
}

export async function loggedInStudent(){
  try {
    const user = await getUserData();
    const email = user?.email || "";
    console.log("Logged in student email:", email, user);
    
    if(!email) return null;
    
    const id = email.split("@")[0].split(".")[1];
    console.log("Logged in student ID:", id);
    
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching student data:", error);
      return null;
    }

    const newdata ={
      ...data,
      firstName :data?.first_name,
      lastName :data?.last_name,
      fatherName :data?.father_name,
      contactNo :data?.contact_no,
    }

    return newdata as StudentSchemaType | null;
  } catch (error) {
    console.error("loggedInStudent error:", error);
    return null;
  }
}

export async function loggedInTeacher(){
  try {
    const user = await getUserData();
    const email = user?.email || "";
    
    if(!email) return null;
    
    const id = email.split("@")[0].split(".")[1];
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("teachers")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching teacher data:", error);
      return null;
    }

    return data as TeacherSchemaType | null;
  } catch (error) {
    console.error("loggedInTeacher error:", error);
    return null;
  }
}


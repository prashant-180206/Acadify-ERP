"use server"

import { supabase } from "@/lib/supabase";

interface Department {
  d_id: number;
  name: string;
  hodid: number;
  email: string;
}

export async function getDepartments(): Promise<Department[]> {
  const { data, error } = await supabase
    .from('departments')
    .select('*')
    .limit(20);
  if (error) {
    throw error;
  }
  return data ?? [];
}

export async function addDepartment(department: Department) {
  const { data, error } = await supabase
    .from('departments')
    .insert([department]);

  if (error) {
    throw error;
  }

  return data;
}

export const getDepById =async (id: string) => {
  const { data, error } = await supabase
    .from('departments')
    .select('*')
    .eq('d_id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};



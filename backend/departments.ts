"use server"

import { supabase } from "@/lib/supabase";
// import { teachers } from "./teachers";

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
  console.log("Add department function called", department);
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

export type DepSummary = {
  d_id: number;
  name: string;
};

export async function getDepSummaries(): Promise<DepSummary[]> {
  const { data, error } = await supabase
    .from('departments')
    .select('d_id, name');

  if (error) {
    console.error('Error fetching departments:', error.message);
    return [];
  }
  return data as DepSummary[];
}



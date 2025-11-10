"use server"

import { supabase } from "@/lib/supabase";

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
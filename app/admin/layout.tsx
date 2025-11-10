// import { supabase } from "@/lib/supabase";
// import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data } = await supabase.auth.getSession();
  // const role = data.session?.user.user_metadata?.role?.toLowerCase();
  // if (role !== "admin") {
  //   redirect("/login");
  // }
  return <main>{children}</main>;
}

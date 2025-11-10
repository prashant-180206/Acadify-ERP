// app/layout.tsx or your root layout component
import { AppSidebar } from "@/components/appSidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
// import { Menu } from "lucide-react";
// import { AppSidebar } from "@/components/app-sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await supabase.auth.getSession();
  const role = data.session?.user.user_metadata?.role?.toLowerCase();
  if (role !== "student") {
    redirect("/login");
  }
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        {/* This button toggles the sidebar */}
        <SidebarTrigger size={"lg"} className="absolute p-0 m-0" />

        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

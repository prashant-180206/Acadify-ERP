// app/layout.tsx or your root layout component
import { AppSidebar } from "@/components/appSidebar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
// import { Menu } from "lucide-react";
// import { AppSidebar } from "@/components/app-sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

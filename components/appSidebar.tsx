"use client";

import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function AppSidebar() {
  const path = usePathname();
  const router = useRouter();
  const menu = [
    { label: "Dashboard", route: "/teacher/dashboard" },
    { label: "Courses", route: "/teacher/courses" },
    { label: "Attendance", route: "/teacher/attendance" },
    { label: "My Class", route: "/teacher/myclass" },
    { label: "Profile", route: "/teacher/profile" },
    { label: "Time Table", route: "/teacher/timetable" },
  ];

  return (
    <Sidebar
      side="left"
      variant="sidebar"
      collapsible="offcanvas"
      className="mt-20 z-0 min-h-[100dvh] absolute"
      innerClassName="bg-main-light px-4 z-0"
    >
      <SidebarHeader className="p-4 ">
        <Avatar className="h-12 w-12 mx-auto">
          <AvatarFallback>RS</AvatarFallback>
        </Avatar>
        <p className="mt-2 text-center font-semibold">Raj Shamani</p>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menu.map((val, idx) => (
            <SidebarMenuItem key={idx}>
              <SidebarMenuButton
                isActive={val.route === path}
                onClick={() => {
                  router.replace(val.route);
                  console.log("wertyuiop");
                }}
              >
                {val.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

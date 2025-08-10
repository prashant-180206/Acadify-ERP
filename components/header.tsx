"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import SignUpBtn from "./signupdialog";
import { Button } from "./ui/button";

const Header = () => {
  const router = useRouter();
  const path = usePathname();

  let Routes = [
    {
      label: "Home",
      link: "",
    },
    {
      label: "About Us",
      link: "",
    },
    {
      label: "About Us",
      link: "",
    },
    {
      label: "About Us",
      link: "",
    },
  ];

  if (path.includes("admin")) {
    Routes = [
      {
        label: "Dashboard",
        link: "/admin/dashboard",
      },
      {
        label: "Query Box",
        link: "/admin/query_box",
      },
      {
        label: "Departments",
        link: "/admin/departments",
      },

      {
        label: "Staff",
        link: "/admin/staff",
      },
    ];
  }

  return (
    <header className="bg-bg-dark f-row justify-between">
      <div className="f-row gap-4">
        <div className=" p-4">
          <Image src={"/logo.png"} alt="LOGO" width={50} height={50} />
        </div>
        <h1 className="text-4xl font-bold text-main-dark">Acadify</h1>
      </div>

      <nav>
        <ul className="f-row gap-6">
          {Routes.map((val, i) => {
            return (
              <li key={i} className="hover:underline ">
                <Link href={val.link}>
                  <p className="text-txt-muted font-semibold">{val.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="f-row gap-4 mr-4">
        <SignUpBtn />
        <Button asChild className="bg-main text-txt-light rounded-full">
          <Link href={""}>Log In</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;

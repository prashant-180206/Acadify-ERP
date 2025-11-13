"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SignUpBtn from "./signupdialog";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const path = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default routes (safe for SSR)
  let Routes = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Contact", link: "/contact" },
    { label: "Services", link: "/services" },
  ];

  // Only update routes after mounted (client only)
  if (mounted && path?.includes("admin")) {
    Routes = [
      { label: "Add Teacher", link: "/admin/add_teacher" },
      { label: "Add Student", link: "/admin/add_student" },
      { label: "Departments", link: "/admin/departments" },
      { label: "Staff", link: "/admin/staff" },
    ];
  }

  return (
    <header className="bg-bg-dark f-row justify-between items-center z-50 h-20 px-4 relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <div className="p-2">
          <Image src="/logo.png" alt="LOGO" width={50} height={50} />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-main-dark">
          Acadify
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          {Routes.map((val, i) => (
            <li key={i} className="hover:underline">
              <Link href={val.link}>
                <p className="text-txt-muted font-semibold">{val.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center gap-4 mr-4">
        <SignUpBtn />
        <Button asChild className="bg-main text-txt-light rounded-full">
          <Link href="/login">Log In</Link>
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileOpen((prev) => !prev)}
      >
        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="absolute top-20 left-0 w-full bg-bg-dark border-t border-gray-700 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {Routes.map((val, i) => (
              <li key={i} onClick={() => setMobileOpen(false)}>
                <Link href={val.link}>
                  <p className="text-txt-muted font-semibold hover:underline">
                    {val.label}
                  </p>
                </Link>
              </li>
            ))}
            <div className="flex flex-col items-center gap-3 mt-4">
              <SignUpBtn />
              <Button asChild className="bg-main text-txt-light rounded-full">
                <Link href="/login">Log In</Link>
              </Button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

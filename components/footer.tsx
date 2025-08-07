"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bg-dark text-muted-foreground dark:bg-background border-t px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* App Info */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            ERP Portal
          </h2>
          <p className="text-sm">
            A modern ERP system for managing institutions and businesses.
          </p>
          <p className="text-xs mt-4 text-muted-foreground">
            © {new Date().getFullYear()} ERP Inc. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-foreground mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/admin-login" className="hover:underline">
                Admin Login
              </Link>
            </li>
            <li>
              <Link href="/teacher-login" className="hover:underline">
                Teacher Login
              </Link>
            </li>
            <li>
              <Link href="/student-login" className="hover:underline">
                Student Login
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold text-foreground mb-2">
            Contact
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:support@erp.com" className="hover:underline">
                support@erp.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+911234567890" className="hover:underline">
                +91 12345 67890
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

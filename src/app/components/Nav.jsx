"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="w-full bg-white flex justify-between items-center px-20 py-4">
      <Image
        src="/assets/images/logo/ppfreshpork-logo.png"
        width={160}
        height={116}
        alt="Logo"
        priority={true}
      />
      <ul className="flex gap-8">
        <li>
          <Link
            className={`text-lg transition-all duration-75 ease-in-out  hover:border-b-2 hover:border-primary ${
              isActive("/products") ? "font-bold text-primary" : ""
            }`}
            href="/products"
          >
            ผลิตภัณฑ์
          </Link>
        </li>
        <li>
          <Link
            className={`text-lg transition-all duration-75 ease-in-out  hover:border-b-2 hover:border-primary ${
              isActive("/myservice") ? "font-bold text-primary" : ""
            }`}
            href="/myservice"
          >
            บริการของเรา
          </Link>
        </li>
        <li>
          <Link
            className={`text-lg transition-all duration-75  ease-in-out hover:border-b-2 hover:border-primary ${
              isActive("/about") ? "font-bold text-primary" : ""
            }`}
            href="/about"
          >
            เกี่ยวกับเรา
          </Link>
        </li>
        <li>
          <Link
            className={`text-lg transition-all duration-75  ease-in-out hover:border-b-2 hover:border-primary ${
              isActive("/contact") ? "font-bold text-primary" : ""
            }`}
            href="/contact"
          >
            ติดต่อเรา
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

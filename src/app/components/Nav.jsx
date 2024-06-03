"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navMenus = [
  { href: "/products", label: "ผลิตภัณฑ์" },
  { href: "/myservice", label: "บริการของเรา" },
  { href: "/about", label: "เกี่ยวกับเรา" },
  { href: "/contact", label: "ติดต่อเรา" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="relative lg:static w-full bg-white flex justify-between items-center px-4 lg:px-20 py-4">
      <Link href="/">
        <Image
          src="/assets/images/logo/ppfreshpork-logo.png"
          width={160}
          height={116}
          alt="Logo"
          priority={true}
        />
      </Link>
      <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <ul
        className={`absolute top-full w-full -ml-4 text-center bg-white z-10 lg:static lg:w-auto lg:flex lg:gap-8 lg:text-left lg:m-0 ${
          menuOpen ? "block" : "hidden"
        } lg:block`}
      >
        {navMenus.map((menu, index) => (
          <li
            className="first-of-type:border-t border-b border-gray3 py-4 lg:border-0 lg:first-of-type:border-0"
            key={index}
          >
            <Link
              className={`text-lg transition-all duration-75 ease-in-out hover:border-b-2 hover:border-primary hover:text-primary ${
                isActive(menu.href) ? "font-bold text-primary" : ""
              }`}
              onClick={() => setMenuOpen(false)}
              href={menu.href}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

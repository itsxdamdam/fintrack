"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col w-[25%] mt-3 text-x gap-6">
      {sidebarLinks.map((link, index) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={index}
            href={link.route}
            className={
              isActive ? "bg-[#386776]/20 text-[#3A6C7B] rounded-3xl" : ""
            }
          >
            <div className="px-3 py-2 font-medium">{link.label}</div>
          </Link>
        );
      })}
    </section>
  );
};

export default Sidebar;

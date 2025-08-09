"use client";

import { sidebarLinks } from "@/constants";
import { SidebarProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ showSidebar }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section
      className={`flex flex-col mt-3 text-x gap-6 absolute md:static top-20 rounded-2xl bg-amber-100 md:bg-inherit z-50 p-10 pl-2 md:p-0 ${
        showSidebar ? "md:w-[35%]" : "hidden"
      }`}
    >
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

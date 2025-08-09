"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  return (
    <main className="main-container">
      <Navbar menu={handleSidebar} />
      <div className="flex mt-10">
        <Sidebar showSidebar={showSidebar} />
        {children}
      </div>
    </main>
  );
}

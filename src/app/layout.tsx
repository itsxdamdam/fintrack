import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap", // or 'auto', 'block', 'fallback', 'optional'
});

export const metadata: Metadata = {
  title: "Fintrack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.className}>
      <body>
        <Navbar />
        <div className="flex container mx-auto px-20 w-full">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

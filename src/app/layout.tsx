import type { Metadata } from "next";
import "./globals.css";
import { Public_Sans } from "next/font/google";

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
      <body>{children}</body>
    </html>
  );
}

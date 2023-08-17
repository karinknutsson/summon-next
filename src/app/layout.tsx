import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

import { Cabin } from "next/font/google";

const cabin = Cabin({
  subsets: ["latin"],
  display: "block",
  variable: "--font-cabin",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Summon",
  description: "Find your next event!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cabin.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}

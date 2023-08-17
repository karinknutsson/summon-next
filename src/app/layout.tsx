import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

import { Vina_Sans } from "next/font/google";

const vinaSans = Vina_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-vina-sans",
  weight: ["400"],
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
  console.log(vinaSans);
  return (
    <html lang="en">
      <body>
        <div className={vinaSans.className}>
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}

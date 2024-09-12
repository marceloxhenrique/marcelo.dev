import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo",
  description: "Marcelo Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={
          (inter.className, "container mx-auto max-w-7xl bg-slate-100")
        }
      >
        <Toaster />
        {children}
      </body>
      <Analytics />
    </html>
  );
}

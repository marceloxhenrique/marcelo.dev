import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marcelo – Full-Stack Web Developer Portfolio",
  description:
    "Explore Marcelo's portfolio, a showcase of full-stack web development expertise. Specializing in building scalable, high-performance applications using modern technologies.",
  keywords: [
    "full-stack developer",
    "web development",
    "software engineer",
    "backend",
    "frontend",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.className} relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100`}
      >
        {/* Background Elements */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="animate-float absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-400/10 blur-3xl"></div>
          <div className="animate-float-delay absolute -right-20 top-3/4 h-[250px] w-[250px] rounded-full bg-indigo-400/10 blur-3xl"></div>
          <div className="animate-float-slow absolute left-1/3 top-1/2 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-3xl"></div>

          {/* Grid Pattern */}
          <div className="bg-grid-slate-200/70 absolute inset-0 bg-[center_top_-1px] [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        </div>

        <div className="relative z-10 w-full">
          <Toaster />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}

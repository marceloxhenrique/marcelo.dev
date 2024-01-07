"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
const error = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-12 text-5xl">
      Ops... page not found, go back to Home.
      <Link href={"/"}>
        <Button variant="outline" className="hover:bg-black hover:text-white">
          Home
        </Button>
      </Link>
    </div>
  );
};

export default error;

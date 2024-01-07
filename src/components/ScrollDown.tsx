import React from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";
import "animate.css";
const ScrollDown = () => {
  return (
    <div className="animate__animated animate__fadeInUp hidden justify-center lg:flex">
      <Link
        href={"#PROJECTS"}
        className=" flex flex-col items-center justify-center text-slate-700"
      >
        <span className="rounded-2xl border-[.16rem] border-slate-700">
          <p className="animate-scroll-down px-2 text-4xl transition-all">.</p>
        </span>
        <MdOutlineKeyboardDoubleArrowDown className="animate-scroll-arrow" />
      </Link>
    </div>
  );
};

export default ScrollDown;

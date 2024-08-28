"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const pagesAvailable = ["HOME", "PROJECTS", "ABOUT", "CONTACT"];
export default function Navbar() {
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const handleClick = () => {
    setOpenCloseModal(!openCloseModal);
  };
  return (
    <header className="font-primary fixed z-10 flex h-14 w-full max-w-7xl items-center justify-between bg-slate-100 p-4 text-lg font-semibold text-gray-800 md:h-20">
      <section>
        <Link
          scroll={true}
          href={"/"}
          className="text-md md:text-lg "
        >{`Marcelo`}</Link>
      </section>
      <nav>
        <ul className="hidden  md:inline-flex">
          {pagesAvailable.map((page) => (
            <li key={page} className="md:ml-5 ">
              <Link
                scroll={true}
                href={`#${page}`}
                className="border-b-[.2rem] border-transparent transition-all hover:border-b-gray-800"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
        <nav
          className={`${
            openCloseModal
              ? "fixed left-0 top-14 z-20 h-screen w-screen bg-white backdrop-blur-md md:hidden"
              : "hidden"
          } `}
        >
          <div className="flex justify-center">
            <ul className="items-left flex flex-col">
              {pagesAvailable.map((page) => (
                <li key={page} className="my-8 text-4xl" onClick={handleClick}>
                  <Link scroll={true} href={`#${page}`}>
                    <p className="border-b-4 border-b-gray-800">{page}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="hover:cursor-pointer md:hidden" onClick={handleClick}>
          {openCloseModal ? (
            <RxCross2 className="h-8 w-8" />
          ) : (
            <RiMenu3Line className="h-8 w-8" />
          )}
        </div>
      </nav>
    </header>
  );
}

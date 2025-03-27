"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const pagesAvailable = ["Home", "Projects", "About", "Contact"];

export default function Navbar() {
  const [openCloseModal, setOpenCloseModal] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setOpenCloseModal(!openCloseModal);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      // Only hide navbar after scrolling down a bit (100px) to avoid flickering
      if (currentScrollPos > 100) {
        setVisible(!isScrollingDown);
      } else {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed z-50 w-full bg-slate-100/80 shadow-sm backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[80rem] items-center justify-between px-4 md:h-20 md:px-8 ">
        <section>
          <Link
            scroll={true}
            href={"/"}
            className="text-md font-semibold md:text-lg"
          >{`Marcelo`}</Link>
        </section>
        <nav>
          <ul className="hidden md:inline-flex">
            {pagesAvailable.map((page) => (
              <li key={page} className="md:ml-5">
                <Link
                  scroll={true}
                  href={`#${page.toUpperCase()}`}
                  className="border-b-[.1rem] border-transparent transition-all hover:border-b-gray-800"
                >
                  {page}
                </Link>
              </li>
            ))}
          </ul>
          <nav
            className={`${
              openCloseModal
                ? "fixed left-0 top-16 z-20 h-screen w-screen bg-white backdrop-blur-md md:hidden"
                : "hidden"
            } `}
          >
            <div className="flex justify-center">
              <ul className="items-left flex w-full flex-col">
                {pagesAvailable.map((page) => (
                  <li
                    key={page}
                    className="h-full text-4xl"
                    onClick={handleClick}
                  >
                    <Link scroll={true} href={`#${page.toUpperCase()}`}>
                      <p className=" border-b-2  p-6 pl-4 text-[#007ACC] hover:bg-[#007ACC] hover:text-white">
                        {page}
                      </p>
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
      </div>
    </header>
  );
}

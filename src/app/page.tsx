"use client";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function Home() {
  return (
    <main
      id="Home"
      className="container mx-auto flex min-h-screen max-w-7xl  flex-col  justify-start  p-4 pt-24 md:items-start"
    >
      <section className="flex w-full flex-col items-center justify-between px-2  text-center md:mt-10 md:flex-row md:text-left">
        <section className="flex flex-col  p-2">
          <p className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Hi, I{"'"}m Marcelo.
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            A Fullstack Web Developer <br />
            who turns ideas into reality.
          </h1>
        </section>
        <section className="my-5 flex h-52 w-52  items-center justify-center rounded-full bg-slate-700">
          Photo
        </section>
      </section>
      <div className="flex w-full items-center justify-center gap-4  p-2  py-4 md:justify-start">
        <Link href={""}>
          <VscGithub className="h-10 w-10" />
        </Link>
        <Link href={""}>
          <AiOutlineLinkedin className="h-[3rem] w-[3rem]" />
        </Link>
      </div>
      <div id="Skills" className="h-screen bg-slate-50"></div>
    </main>
  );
}

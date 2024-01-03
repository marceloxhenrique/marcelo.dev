/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Badge from "@/components/Badge";
import Link from "next/link";
import profile from "../../../public/profile.png";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { AiOutlineLinkedin } from "react-icons/ai";
import { ContactForm } from "@/components/Contact";
import { VscGithub } from "react-icons/vsc";
import "animate.css";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="Home"
        className="container mx-auto flex min-h-screen max-w-7xl  flex-col p-4  pt-28 text-black md:items-start md:pt-52"
      >
        <section className="flex w-full flex-col items-center justify-between px-2  text-center md:mt-10 md:flex-row md:text-left">
          <section className="animate__fadeInDown animate__animated  flex flex-col p-2">
            <p className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              Hi, I{"'"}m Marcelo
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              a Web Developer <br />
              who turns ideas into reality.
            </h1>
          </section>
          <section className="animate__animated animate__fadeInDown flex animate-[vote] justify-center overflow-hidden rounded-lg">
            <Image src={profile} alt="avatar" width={350} height={350} />
          </section>
        </section>
        <section className="animate__animated animate__fadeIn flex w-full items-center  justify-center  gap-4 p-2 py-4 md:justify-start">
          <Link href={"https://github.com/marceloxhenrique"} target="_blank">
            <VscGithub className="h-10 w-10" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/marcelo-henrique-da-silva-891b36220/"
            }
            target="_blank"
          >
            <AiOutlineLinkedin className="h-[3rem] w-[3rem]" />
          </Link>
        </section>
        <Badge />
        <Projects />
        <About />
        <div className="flex w-full justify-center">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

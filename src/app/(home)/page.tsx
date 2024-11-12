"use client";
import Link from "next/link";
import Badge from "@/components/Badge";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { ContactForm } from "@/components/Contact";
import Footer from "@/components/Footer";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import "animate.css";
import ScrollDown from "@/components/ScrollDown";
import Image from "next/image";
import profile from "../../../public/profile.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="HOME"
        className=" flex min-h-screen flex-col items-center p-1 pt-20 text-black md:pt-52"
      >
        <section className="">
          <section className="flex w-full flex-col items-center justify-center   px-2 text-center md:flex-row md:text-left">
            <Image
              src={profile}
              alt="avatar"
              className="h-[14rem] w-[14rem] rounded-full bg-blue-500 md:h-[18rem] md:w-[18rem]"
            />
            <section className="animate__fadeInDown animate__animated flex flex-col p-2">
              <p className=" text-[min(10vw,3.5rem)] leading-[min(10vw,3.5rem)]">
                {`Hi, I'm Marcelo`}
              </p>
              <p className="text-[min(10vw,3.5rem)] leading-[min(10vw,3.5rem)]">
                a{" "}
                <span className=" text-[min(14vw,4rem)] font-semibold leading-[min(15vw,4.5rem)] text-[#007ACC]">
                  Full-Stack Web Developer
                </span>
                <br />
                who turns ideas into reality.
              </p>
            </section>
          </section>
          <Badge />
          <section className="animate__animated animate__zoomIn flex w-full items-center justify-center gap-4 p-2 py-4 ">
            <Link href={"https://github.com/marceloxhenrique"} target="_blank">
              <VscGithub className="h-10 w-10 text-[#333]" />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/marcelo-henrique-da-silva-891b36220/"
              }
              target="_blank"
            >
              <AiOutlineLinkedin className="h-[3rem] w-[3rem] text-[#007ACC]" />
            </Link>
          </section>
          <ScrollDown />
        </section>
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

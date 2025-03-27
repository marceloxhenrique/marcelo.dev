"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineChevronDown } from "react-icons/hi";
import profile from "../../../public/profile.png";
import Navbar from "@/components/Navbar";
import Badge from "@/components/Badge";
import Projects from "@/components/Projects";
import About from "@/components/About";
import { ContactForm } from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col items-center">
        <section
          id="HOME"
          className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20 lg:pt-10"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="order-2 flex flex-col space-y-4 text-center md:order-1 md:text-left"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Hi, I'm Marcelo</span>
                  <span className="mt-2 block bg-gradient-to-r from-[#0066B2] to-[#0094D9] bg-clip-text text-transparent">
                    a Full-Stack Web Developer
                  </span>
                </h1>

                <p className="text-xl text-gray-600">
                  Bringing ideas to life with code and creativity.
                </p>

                <div className="flex justify-center space-x-6 pt-4 md:justify-start">
                  <Link
                    href="https://github.com/marceloxhenrique"
                    target="_blank"
                    className="transform transition-transform hover:scale-110"
                  >
                    <VscGithub className="h-8 w-8 text-gray-800" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/marcelo-henrique-da-silva-891b36220/"
                    target="_blank"
                    className="transform transition-transform hover:scale-110"
                  >
                    <AiOutlineLinkedin className="h-9 w-9 text-[#007ACC]" />
                  </Link>
                </div>
                <div className="pt-4">
                  <Badge />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.9,
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 flex justify-center md:order-2"
              >
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#007ACC]/20 bg-[#007ACC]/10 shadow-xl sm:h-72 sm:w-72 md:h-80 md:w-80">
                  <Image
                    src={profile}
                    alt="Marcelo Henrique"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hidden md:mt-16 md:flex"
          >
            <Link
              href="#PROJECTS"
              className="flex flex-col items-center text-gray-500 hover:text-[#007ACC] "
            >
              <span className="mb-2 text-sm">Scroll Down</span>
              <HiOutlineChevronDown className="h-6 w-6 animate-bounce" />
            </Link>
          </motion.div>
        </section>
        <section id="PROJECTS" className="w-full py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Projects />
            </motion.div>
          </div>
        </section>
        <section
          id="ABOUT"
          className="w-full max-w-4xl  rounded-xl  px-2 py-20 text-center  backdrop-blur-sm"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <About />
            </motion.div>
          </div>
        </section>
        <section id="CONTACT" className="w-full py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

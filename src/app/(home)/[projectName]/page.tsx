"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Project } from "@/components/ProjectsList";
import { IoIosArrowRoundBack } from "react-icons/io";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { projectName } = useParams();
  const projectDecode = decodeURI(projectName.toString());
  const [projectFiltered] = Project.filter(
    (project) => project.title == projectDecode,
  );
  if (projectFiltered) {
    return (
      <main className="container mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between">
        <section className="flex h-full flex-col">
          <section className="flex w-full flex-col items-center justify-between gap-4 px-2 md:p-4 lg:flex-row lg:items-start">
            <article className="flex w-full max-w-[40rem] flex-col items-center ">
              <Link href={"/#PROJECTS"} className="flex w-full items-center ">
                <IoIosArrowRoundBack className="h-12 w-16 cursor-pointer rounded-md hover:scale-105" />
              </Link>
              <h1 className="w-full text-left text-4xl sm:pl-5">
                {projectFiltered.title}
              </h1>
              <div className="my-4 flex flex-col items-center sm:px-5 lg:max-w-[40rem]">
                <Image
                  src={projectFiltered.normalImage}
                  alt={`${projectFiltered.title} image`}
                />
                <p className="py-4 text-base md:text-lg">
                  {projectFiltered.description}
                </p>
              </div>
            </article>
            <section className="mb-6 max-w-[40rem] lg:my-24">
              <div className=" grid max-w-[40rem] grid-cols-3 gap-4 overflow-hidden rounded-md bg-slate-200 p-2">
                {projectFiltered.mockupImages.map((project) => (
                  <Image
                    key={project.src}
                    src={project.src}
                    className={`h-full rounded-md bg-white`}
                    width={200}
                    height={200}
                    alt={`${projectFiltered.title} image`}
                  />
                ))}
              </div>
              <h2 className="pt-4 text-base lg:text-xl">
                Tech used in this project:
              </h2>
              <ul className="flex w-fit flex-wrap rounded-md pb-4 text-base font-semibold lg:text-xl">
                {projectFiltered.technologies.map((tech) => (
                  <li
                    className="m-1 cursor-default rounded-md border-none bg-slate-300 px-3 py-1 text-sm"
                    key={tech}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a href={projectFiltered.projectUrl} target="_blank">
                <button className="my-3 mr-3 rounded-md bg-slate-900 px-4 py-2 text-xl font-semibold text-white transition-all hover:scale-105">
                  View website
                </button>
              </a>
              <a
                href={projectFiltered.gitHubUrl}
                target="_blank"
                className="w-full"
              >
                <button className="my-3 rounded-md bg-slate-900 px-4 py-2 text-xl font-semibold text-white transition-all hover:scale-105">
                  GitHub
                </button>
              </a>
            </section>
          </section>
        </section>
        <Footer />
      </main>
    );
  }
  if (!projectFiltered) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-12 text-center text-5xl">
        Oops... page not found, go back to Home.
        <Link href={"/"}>
          <Button variant="outline" className="hover:bg-black hover:text-white">
            BACK TO HOME
          </Button>
        </Link>
      </div>
    );
  }
};

export default Projects;

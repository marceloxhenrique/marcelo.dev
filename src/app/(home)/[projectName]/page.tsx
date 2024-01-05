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

  return (
    <main className="container mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between">
      <section className="flex h-full flex-col">
        <Link
          href={"/"}
          className="my-4 flex w-16 items-center justify-center text-xl"
        >
          <IoIosArrowRoundBack className="h-12 w-16 cursor-pointer rounded-md hover:bg-slate-100" />
        </Link>
        <section className="flex w-full flex-col items-center justify-between gap-2 p-4 lg:flex-row lg:items-start">
          <article className="flex flex-col items-center ">
            <h1 className=" w-full text-left text-4xl">
              {projectFiltered.title}
            </h1>
            <div className="my-4 max-w-[30rem] ">
              <Image
                src={projectFiltered.normalImage}
                alt={`${projectFiltered.title} image`}
                className=""
              />
              <p className="py-4 text-justify text-lg">
                {projectFiltered.description}
              </p>
            </div>
          </article>
          <section className="max-w-[40rem]">
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
            <p className="w-fit rounded-md  pb-4 text-base font-semibold lg:text-xl">
              {projectFiltered.thecnologies.map((tech) => (
                <Button
                  className="m-1 cursor-default border-none bg-slate-300 text-lg"
                  variant={"outline"}
                  key={tech}
                >
                  {tech}
                </Button>
              ))}
            </p>
            {/* <p className="font-semibold">Check it out.</p> */}
            <a href={projectFiltered.projectUrl} target="_blank">
              {/* <p className="text-lg underline">{projectFiltered.projectUrl}</p> */}
              <Button
                className="my-4  bg-black py-5  text-white lg:text-lg"
                variant={"outline"}
              >
                Check it out
              </Button>
            </a>
            <a
              href={projectFiltered.gitHubUrl}
              target="_blank"
              className="w-full"
            >
              <Button
                className="my-4  ml-2 bg-black py-5 text-white shadow-md lg:text-lg"
                variant={"outline"}
              >
                GitHub
              </Button>
            </a>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;

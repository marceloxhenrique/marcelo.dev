"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Project } from "@/components/ProjectsList";
import { IoReturnDownBack } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const { projectName } = useParams();
  const projectDecode = decodeURI(projectName.toString());
  const [projectFiltered] = Project.filter(
    (project) => project.title == projectDecode,
  );

  return (
    <main className="flex min-h-screen w-full flex-col  ">
      <Link href={"/"}>
        <Button className="my-4 w-16 text-xl">
          <IoReturnDownBack className="h-12 w-12 cursor-pointer" />
        </Button>
      </Link>
      <section className="flex w-full flex-col items-center justify-between  p-4 lg:flex-row">
        <div className="">
          <h1 className="mt-4 text-4xl">{projectFiltered.title}</h1>
          <p className="max-w-[30rem] py-8 text-xl">{projectFiltered.text}</p>
          <div className="my-4 max-w-[30rem]">
            <Image
              src={projectFiltered.normalImage}
              alt={`${projectFiltered.title} image`}
              className=""
            />
          </div>
        </div>
        <div className="relative grid max-w-[50rem] grid-cols-3 gap-4 overflow-hidden rounded-md bg-slate-200 p-2">
          {projectFiltered.mockupImages.map((project) => (
            <Image
              key={project.src}
              src={project.src}
              className="rounded-md bg-white hover:absolute hover:left-0 hover:top-0 hover:h-full hover:w-full"
              width={200}
              height={200}
              alt={`${projectFiltered.title} image`}
            />
          ))}
        </div>
      </section>
      <h2>Tech used in this porjects</h2>
      <p className="w-fit rounded-md bg-slate-300 text-xl font-semibold">
        {projectFiltered.thecnologies}
      </p>
    </main>
  );
};

export default Projects;

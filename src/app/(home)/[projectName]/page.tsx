"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Project } from "@/components/ProjectsList";
import { IoIosArrowRoundBack } from "react-icons/io";
import Footer from "@/components/Footer";

const Projects = () => {
  const [picture, setPicture] = useState<string>();
  const [zoomInOut, setZoomInOut] = useState<boolean>(false);
  const { projectName } = useParams();
  const projectDecode = decodeURI(projectName.toString());
  const [projectFiltered] = Project.filter(
    (project) => project.title == projectDecode,
  );

  const zoomPicture = (data: string) => {
    setPicture(data);
    setZoomInOut(!zoomInOut);
  };

  return (
    <main className="flex min-h-screen w-full flex-col justify-between">
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
          <div className="max-w-[40rem]">
            <section className="relative">
              <div className=" grid max-w-[40rem] grid-cols-3 gap-4 overflow-hidden rounded-md bg-slate-200 p-2">
                {projectFiltered.mockupImages.map((project) => (
                  <Image
                    key={project.src}
                    src={project.src}
                    className={`h-full cursor-pointer rounded-md bg-white`}
                    width={200}
                    height={200}
                    alt={`${projectFiltered.title} image`}
                    onClick={() => {
                      zoomPicture(project.src);
                    }}
                  />
                ))}
              </div>
              {picture && (
                <Image
                  src={picture}
                  className={`${
                    zoomInOut
                      ? `absolute left-0 top-0 h-full w-full p-1`
                      : `hidden`
                  }   cursor-pointer rounded-md bg-white`}
                  width={200}
                  height={200}
                  alt={`${projectFiltered.title} image`}
                  onClick={() => {
                    setZoomInOut(!zoomInOut);
                  }}
                />
              )}
            </section>
            <h2 className="lg:stext-xl pt-4 text-base">
              Tech used in this project:
            </h2>
            <p className="w-fit rounded-md pb-4 text-base font-semibold lg:text-xl">
              {projectFiltered.thecnologies}
            </p>
            <p className="font-semibold">Check it out.</p>
            <a href={projectFiltered.projectUrl} target="_blank">
              <p className="text-lg underline">{projectFiltered.projectUrl}</p>
            </a>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;

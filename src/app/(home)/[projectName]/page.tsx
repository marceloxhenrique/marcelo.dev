"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Project } from "@/components/ProjectsList";
import { IoReturnDownBack } from "react-icons/io5";

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
    <main className="flex min-h-screen w-full flex-col ">
      <Link
        href={"/"}
        className="my-4 flex w-16 items-center justify-center text-xl"
      >
        <IoReturnDownBack className="h-12 w-12 cursor-pointer" />
      </Link>
      <section className="flex w-full flex-col items-center justify-between gap-2 p-4 lg:flex-row lg:items-start">
        <article className="flex flex-col items-center ">
          <h1 className=" w-full text-left text-4xl">
            {projectFiltered.title}
          </h1>
          <div className="my-4 max-w-[30rem]">
            <Image
              src={projectFiltered.normalImage}
              alt={`${projectFiltered.title} image`}
              className=""
            />
            <p className="p-4 text-justify text-lg">
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
          <h2 className="pt-4 text-lg underline ">
            Tech used in this project:
          </h2>
          <p className="w-fit rounded-md  py-4 text-xl font-semibold">
            {projectFiltered.thecnologies}
          </p>
        </div>
      </section>
      {/* <h2 className="pl-4">Tech used in this porjects</h2> */}
    </main>
  );
};

export default Projects;

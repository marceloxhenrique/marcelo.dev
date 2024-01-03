import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

type Projects = {
  id: number;
  title: string;
  text: string;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
  normalImage: StaticImageData;
  gitHubUrl: string;
  projectUrl: string;
  thecnologies: string;
};

const CardProject = ({ project }: { project: Projects }) => {
  return (
    <section className="flex flex-col p-2 md:flex-row">
      <div className="hidden flex-col items-center justify-center lg:flex lg:flex-row ">
        <Image
          src={project.imageMobile}
          alt={project.title}
          className="h-[14rem] w-40"
        />
        <Image
          src={project.imageDesktop}
          alt="something"
          className="h-64 w-[26rem]"
        />
      </div>
      <article className="group flex h-full flex-col justify-between  rounded-md border-2 border-transparent p-4 transition-all hover:border-2 hover:border-slate-200  hover:bg-gray-100 hover:shadow-lg">
        <Link href={project.projectUrl} target="_blank">
          <h2 className="flex cursor-pointer flex-row  items-center pb-2 text-xl font-semibold text-slate-800 transition-all group-hover:text-black group-hover:underline">
            {project.title}
            <FiArrowUpRight className="ml-2 hidden text-2xl transition-all group-hover:block" />
          </h2>
        </Link>
        <p className="h-fit max-w-sm  text-lg">{project.text}</p>
        <Image
          src={project.normalImage}
          alt={`${project.title} image`}
          className="w-full max-w-md lg:hidden"
        />
        <section className="flex flex-row  gap-10 text-center">
          <Link href={project.gitHubUrl} target="_blank" className="w-full">
            <Button
              className="my-4 w-full bg-black py-5 text-white shadow-md"
              variant={"outline"}
            >
              GitHub
            </Button>
          </Link>
          <Link href={`/${project.title}`} className="w-full ">
            <Button
              className="my-4 w-full bg-black py-5 text-white shadow-md"
              variant={"outline"}
            >
              See more
            </Button>
          </Link>
        </section>
      </article>
    </section>
  );
};

export default CardProject;

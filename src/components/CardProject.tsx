import React from "react";
import Image, { StaticImageData } from "next/image";
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
  thecnologies: string[];
};

const CardProject = ({ project }: { project: Projects }) => {
  return (
    <section className="flex flex-col rounded-md bg-slate-300 md:flex-row md:bg-slate-100">
      <div className="hidden flex-col items-center justify-center  lg:flex lg:flex-row">
        <Image
          src={project.imageMobile}
          alt={project.title}
          className="h-[14rem] w-40"
        />
        <Link href={project.projectUrl} target="_blank">
          <Image
            src={project.imageDesktop}
            alt="something"
            className="w-[40rem]"
          />
        </Link>
      </div>
      <article className="flex h-full flex-col justify-between rounded-md p-4 py-6 transition-all">
        <h2 className="font-primary w-fit items-center text-3xl font-bold text-slate-800 transition-all">
          {project.title}
        </h2>
        <p className="font-primary h-fit max-w-md text-lg md:text-left">
          {project.text}
        </p>
        <Image
          src={project.imageDesktop}
          alt={`${project.title} image`}
          className="w-full max-w-lg  rounded-md bg-slate-300 lg:hidden"
        />
        <Link href={`/${project.title}`} className="w-full ">
          <button className="my-4 rounded-md bg-slate-900 px-7 py-3 text-xl font-semibold text-white transition-all hover:scale-105 lg:px-11 lg:py-4">
            See more
          </button>
        </Link>
      </article>
    </section>
  );
};

export default CardProject;

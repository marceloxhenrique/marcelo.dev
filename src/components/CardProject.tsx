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
        <Link href={project.projectUrl} target="_blank">
          <Image
            src={project.imageDesktop}
            alt="something"
            className="w-[40rem]"
          />
        </Link>
      </div>
      <article className="flex h-full flex-col justify-between  rounded-md  p-4 py-6 transition-all">
        <h2 className="font-primary  w-fit items-center text-2xl font-bold text-slate-800 transition-all">
          {project.title}
        </h2>
        <p className="font-primary h-fit  max-w-sm text-lg">{project.text}</p>
        <Image
          src={project.normalImage}
          alt={`${project.title} image`}
          className="w-full max-w-md lg:hidden"
        />
        <section className="flex flex-row  gap-10 text-left">
          <Link href={`/${project.title}`} className="w-full ">
            <Button
              className="my-4 bg-black py-5 font-semibold  text-white "
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

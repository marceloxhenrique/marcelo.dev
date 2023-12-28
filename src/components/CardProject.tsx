import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

type Projects = {
  id: number;
  title: string;
  text: string;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
};

const CardProject = ({ project }: { project: Projects }) => {
  return (
    <section className="flex flex-col p-2 md:flex-row">
      <div className="flex flex-col items-center justify-center md:flex-row ">
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
      <article className="flex h-full flex-col justify-between py-6 ">
        <p className="h-fit max-w-sm p-2 text-lg">{project.text}</p>
        <div className="  text-center">
          <Button className="mx-2 shadow-md" variant={"outline"}>
            GitHub
          </Button>
          <Button className="mx-2 shadow-md" variant={"outline"}>
            Site online
          </Button>
        </div>
      </article>
    </section>
  );
};

export default CardProject;

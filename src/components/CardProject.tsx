import React, { useState } from "react";
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
  technologies: string[];
};

const CardProject = ({ project }: { project: Projects }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative transform overflow-hidden rounded-lg shadow-lg transition-transform "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={project.normalImage}
        alt={project.title}
        className="h-full w-full object-cover"
      />
      {hovered && (
        <>
          <Link
            href={project.title}
            className="bg-custom-gradient animate-in absolute inset-0 hidden cursor-pointer flex-col justify-end p-3 text-white sm:flex sm:p-4"
          >
            <h2 className="animate__animated animate__fadeInUp font-semibold [font-size:_clamp(2em,3vw,4em)] ">
              {project.title}
            </h2>
            <p className="animate__animated animate__fadeInUp ">
              {project.text}
            </p>
          </Link>
          <Link
            href={project.title}
            className="absolute inset-0 flex cursor-pointer flex-col justify-end p-3 text-white sm:hidden sm:p-4"
          ></Link>
        </>
      )}
    </div>
  );
};

export default CardProject;

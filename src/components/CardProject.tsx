import { useState } from "react";
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
      className="relative h-96 w-full max-w-[40rem] transform overflow-hidden rounded-lg shadow-lg transition-transform"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={project.normalImage || "/placeholder.svg"}
        alt={project.title}
        width={600}
        height={400}
        className="h-full w-full object-cover"
      />
      {hovered && (
        <>
          <Link
            href={project.title}
            className="absolute inset-0 hidden cursor-pointer flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-3 text-white sm:flex sm:p-4"
          >
            <h2 className="font-semibold [font-size:_clamp(2em,3vw,4em)]">
              {project.title}
            </h2>
            <p>{project.text}</p>
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

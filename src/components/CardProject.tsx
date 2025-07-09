import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Projects = {
  id: number;
  title: string;
  text: string;
  normalImage: StaticImageData;
  gitHubUrl: string;
  projectUrl: string;
  technologies: string[];
};

const CardProject = ({ project }: { project: Projects }) => {
  return (
    <div
      className="relative group  w-full max-w-[30rem] transform overflow-hidden rounded-lg shadow-lg transition-transform"
    >
    <Image
      src={project.normalImage}
      alt={project.title}
      width={600}
      height={400}
      className="h-full w-full object-cover"
    />
    <>
      <Link
        href={project.title}
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent p-4 text-white opacity-0 translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
      >
        <h2 className="font-sans [font-size:_clamp(2em,2vw,3em)] ">
          {project.title}
        </h2>
      </Link>
    </>
    </div>
  );
};

export default CardProject;

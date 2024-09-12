import React from "react";
import CardProject from "./CardProject";
import { Project } from "./ProjectsList";

const Projects = () => {
  return (
    <section
      id="PROJECTS"
      className="flex min-h-screen w-full flex-col justify-between pt-20 md:mt-40"
    >
      <h1 className=" text-center text-4xl font-semibold md:text-5xl">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Project.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

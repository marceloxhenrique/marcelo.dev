import React from "react";
import CardProject from "./CardProject";

import { Project } from "./ProjectsList";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="mt-52 flex  min-h-screen w-full flex-col pt-20"
    >
      <h1 className="  my-10 text-center text-4xl md:text-5xl">Projects</h1>
      <div className=" flex w-full flex-wrap justify-center gap-12 ">
        {Project.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

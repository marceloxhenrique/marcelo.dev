import CardProject from "./CardProject";
import { Project } from "./ProjectsList";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section
      id="PROJECTS"
      className="flex w-full flex-col justify-between gap-4 pt-8"
    >
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {Project.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

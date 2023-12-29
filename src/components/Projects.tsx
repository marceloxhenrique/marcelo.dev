import React from "react";
import CardProject from "./CardProject";
import externaticMobile from "../../public/externatic-mobile.png";
import externaticDesktop from "../../public/externatic-desktop.png";
import wildQuizDesktop from "../../public/wildQuiz-desktop.png";
import wildQuizMobile from "../../public/wildQuiz-mobile.png";
import nomads from "../../public/nomads.png";
import projetLogin from "../../public/projetoLogin2.png";
import { StaticImageData } from "next/image";
import externatic from "../../public/externatic.png";

type Projects = {
  id: number;
  title: string;
  text: string;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
};
const projects: Projects[] = [
  {
    id: 1,
    title: "Externatic",
    text: "Le troisième projet créé lors de la formation de développeur Web à la Wild Code School. En partenariat avec Externatic nous avons développé une application web et mobile, destinée à faciliter la recherche d'emploi des candidatsDans le cadre de ce projet nous avons dû développer le Frontend, Backend et la base de données.Un design a été créé en utilisant Figma pour donner une identité visuelle à l'application.",
    imageMobile: externaticMobile,
    imageDesktop: externaticDesktop,
  },
  {
    id: 2,
    title: "Wild Quiz",
    text: "Wild Quiz is a Quizz about the city of Lyon, this Project is the first of the three projects created during the course of Web Development Of The Wild Code School of Lyon",
    imageDesktop: wildQuizDesktop,
    imageMobile: wildQuizMobile,
  },
  // {
  //   imageMobile: nomads,
  //   imageDesktop: nomads,
  //   id: 3,
  //   text: "Daily expat is website that have as target all the expats that are missing their countries and want to get news, music, photos and recipes of their country, this is the second of the three projects created during the course of Web Development Of The Wild Code School of Lyon",
  // },
  // {
  //   imageMobile: projetLogin,
  //   imageDesktop: projetLogin,
  //   id: 4,
  //   text: "Project Login2 is project used to put in practice all the skills of HTML5 and CSS3 learned during the course Curso em Video.",
  // },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      className="mt-52 flex  min-h-screen w-full flex-col pt-20"
    >
      <h1 className="  my-10 text-center md:text-5xl">Projects</h1>
      <div className=" flex w-full flex-wrap justify-center gap-12 ">
        {projects.map((project) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

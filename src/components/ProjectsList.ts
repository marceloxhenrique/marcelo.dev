import externaticMobile from "../../public/externatic-mobile.png";
import externaticDesktop from "../../public/externatic-desktop.png";
import externatic from "../../public/externatic.png";
import wildQuizDesktop from "../../public/wildQuiz-desktop.png";
import wildQuizMobile from "../../public/wildQuiz-mobile.png";
import wildQuiz from "../../public/wildQuiz.png";
import nomads from "../../public/nomads.png";
import projetLogin from "../../public/projetoLogin2.png";

import { StaticImageData } from "next/image";
type Projects = {
  id: number;
  title: string;
  text: string;
  imageMobile: StaticImageData;
  imageDesktop: StaticImageData;
  normalImage: StaticImageData;
  gitHubUrl: string;
  projectUrl: string;
};
export const projects: Projects[] = [
  {
    id: 1,
    title: "Externatic",
    text: "In collaboration with Externatic, we have successfully developed a web and mobile application designed to streamline job searches for candidates. This marks my final project during the web developer training at the Wild Code School.",
    imageMobile: externaticMobile,
    imageDesktop: externaticDesktop,
    normalImage: externatic,
    gitHubUrl:
      "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P3-Externatic",
    projectUrl: "https://externatic.lyon-2.wilders.dev/",
  },
  {
    id: 2,
    title: "Wild Quiz",
    text: "Wild Quiz is a Quizz about the city of Lyon, this Project is the first of the three projects created during the course of Web Development Of The Wild Code School of Lyon",
    imageMobile: wildQuizMobile,
    imageDesktop: wildQuizDesktop,
    normalImage: wildQuiz,
    gitHubUrl:
      "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WildQuiz",
    projectUrl: "wildQuiz",
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

import externaticMobile from "../../public/externatic-mobile.png";
import externaticDesktop from "../../public/externatic-desktop.png";
import externatic from "../../public/externatic.png";
import externatic1 from "../../public/externatic1.png";
import externatic2 from "../../public/externatic2.png";
import externatic3 from "../../public/externatic3.png";
import externatic4 from "../../public/externatic4.png";
import wildQuizDesktop from "../../public/wildQuiz-desktop.png";
import wildQuizMobile from "../../public/wildQuiz-mobile.png";
import wildQuiz from "../../public/wildQuiz.png";
import nomads from "../../public/nomads.png";
import projetLogin from "../../public/projetoLogin2.png";
import { StaticImageData } from "next/image";
class Projects {
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public imageMobile: StaticImageData,
    public imageDesktop: StaticImageData,
    public normalImage: StaticImageData,
    public gitHubUrl: string,
    public projectUrl: string,
    public thecnologies: string,
    public mockupImages: StaticImageData[],
  ) {}
}

const Projectexternatic: Projects = new Projects(
  1,
  "Externatic",
  "In collaboration with Externatic, we have successfully developed a web and mobile application designed to streamline job searches for candidates. This marks my final project during the web developer training at the Wild Code School.",
  externaticMobile,
  externaticDesktop,
  externatic,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P3-Externatic",
  "https://externatic.lyon-2.wilders.dev/",
  "HTML5 - CSS3 - JavaScript - ReactJS - NodeJS - ExpressJS - SQL",
  [
    externatic1,
    externatic2,
    externatic3,
    externatic4,
    externatic1,
    externatic2,
    externatic3,
    externatic4,
  ],
);

const ProjectWildQuiz: Projects = new Projects(
  2,
  "Wild Quiz",
  "Wild Quiz is a Quizz about the city of Lyon, this Project is the first of the three projects created during the course of Web Development Of The Wild Code School of Lyon",
  wildQuizMobile,
  wildQuizDesktop,
  wildQuiz,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WildQuiz",
  "Wild Quiz",
  "",
  [externatic1, externatic2, externatic3, externatic4],
);
export const Project: Projects[] = [Projectexternatic, ProjectWildQuiz];

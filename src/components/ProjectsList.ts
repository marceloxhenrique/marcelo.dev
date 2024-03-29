import externaticMobile from "../../public/externatic-mobile.png";
import externaticDesktop from "../../public/externatic-desktop.png";
import externatic from "../../public/externatic.png";
import externatic1 from "../../public/externatic1.png";
import externatic2 from "../../public/externatic2.png";
import externatic3 from "../../public/externatic3.png";
import externatic4 from "../../public/externatic4.png";
import externatic5 from "../../public/externatic5.png";
import externatic6 from "../../public/externatic6.png";
import externatic7 from "../../public/externatic7.png";
import wildQuizDesktop from "../../public/wildQuiz-desktop.png";
import wildQuizMobile from "../../public/wildQuiz-mobile.png";
import wildQuiz from "../../public/wildQuiz.png";
import wildQuiz1 from "../../public/wildQuiz1.png";
import wildQuiz2 from "../../public/wildQuiz2.png";
import wildQuiz3 from "../../public/wildQuiz3.png";
import wildQuiz4 from "../../public/wildQuiz4.png";
import wildQuiz5 from "../../public/wildQuiz5.png";
import wildQuiz6 from "../../public/wildQuiz6.png";
import { StaticImageData } from "next/image";
class Projects {
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public description: string,
    public imageMobile: StaticImageData,
    public imageDesktop: StaticImageData,
    public normalImage: StaticImageData,
    public gitHubUrl: string,
    public projectUrl: string,
    public thecnologies: string[],
    public mockupImages: StaticImageData[],
  ) {}
}

const Projectexternatic: Projects = new Projects(
  1,
  "Externatic",
  "In collaboration with Externatic, we have successfully developed a web and mobile application designed to streamline job searches for candidates. This   marks my final project during the web developer training at the Wild Code School.",
  `On the Frontend, we developed an intuitive user-friendly and responsive design interface using  technologies such as HTML5, CSS3, and ReactJS.
  For the Backend, we used NodeJS and ExpressJS, to build a server infrastructure
  In terms of the database, we implemented a SQL database to efficiently store and retrieve data.
  To bring our vision to life, we collaborated on the design aspects using Figma, creating a visually appealing and cohesive identity for the application. The use of Mui/material further enriched the user interface, providing a polished and modern aesthetic.
  This project not only honed my technical skills but also underscored the importance of team work.`,
  externaticMobile,
  externaticDesktop,
  externatic,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P3-Externatic",
  "https://externatic.lyon-2.wilders.dev/",
  [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REAC.JS",
    "NODE.JS",
    "EXPRESS.JS",
    "MySQL",
    "Mui/material",
    "FIGMA",
  ],
  [
    externatic,
    externatic1,
    externatic2,
    externatic3,
    externatic4,
    externatic5,
    externatic6,
    externatic7,
    // externatic4,
  ],
);

const ProjectWildQuiz: Projects = new Projects(
  2,
  "Wild Quiz",
  "Wild Quiz is a Quizz about the city of Lyon, this Project is the first of the three projects created during the course of Web Development Of The Wild Code School of Lyon",
  `The project consists of an interactive quiz based on the City of Lyon. The user can explore a dynamic map of Lyon, on the map points of interest are marked, and the user can click on these points to start the quiz. We used HTML5 and CSS3 to craft a responsive interface, JavaScript to infuse dynamism into the project, and the Leaflet library to improve interactivity with the map. Figma played a key role in designing and planning the project.`,
  wildQuizMobile,
  wildQuizDesktop,
  wildQuiz,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WildQuiz",
  "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildQuiz/",
  ["HTML5", "CSS3", "JAVASCRIPT", "LEAFLET", "FIGMA"],
  [wildQuiz, wildQuiz1, wildQuiz2, wildQuiz3, wildQuiz4, wildQuiz5, wildQuiz6],
);
export const Project: Projects[] = [Projectexternatic, ProjectWildQuiz];

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
import myTalkMobile from "../../public/mytalk-mobile.png";
import myTalkDesktop from "../../public/mytalk-desktop.png";

import myTalk from "../../public/mytalk.png";
import myTalk1 from "../../public/mytalk1.png";
import myTalk2 from "../../public/mytalk2.png";
import myTalk3 from "../../public/mytalk3.png";
import myTalk4 from "../../public/mytalk4.png";

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
    public technologies: string[],
    public mockupImages: StaticImageData[],
  ) {}
}

const Projectexternatic: Projects = new Projects(
  1,
  "Externatic",
  "Web and mobile application designed to streamline job searches for candidates.",
  `This project streamlines the job search experience with a user-friendly web and mobile application. Candidates can easily browse job listings, save their favorites, and receive personalized recommendations. The application also allows users to track their application progress and receive notifications about new opportunities, ensuring they never miss out on potential job offers. With intuitive navigation and a clean interface, the app makes finding the right job a smooth and efficient process. This Project was created during the course of Web Development Of The Wild Code School of Lyon.`,
  externaticMobile,
  externaticDesktop,
  externatic,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P3-Externatic",
  "https://externatic.lyon-2.wilders.dev/",
  [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React js",
    "Node js",
    "Express js",
    "MySQL",
    "Mui/material",
    "Figma",
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
  "Wild Quiz is an interactive quizz about Lyon.",
  `The project consists of an interactive quiz based on the City of Lyon. The user can explore a dynamic map of Lyon, on the map points of interest are marked, and the user can click on these points to start the quiz. This Project was created during the course of Web Development Of The Wild Code School of Lyon.`,
  wildQuizMobile,
  wildQuizDesktop,
  wildQuiz,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WildQuiz",
  "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildQuiz/",
  ["HTML5", "CSS3", "JavaScript", "Leaflet", "Figma"],
  [wildQuiz, wildQuiz1, wildQuiz2, wildQuiz3, wildQuiz4, wildQuiz5, wildQuiz6],
);
const MyTalk: Projects = new Projects(
  2,
  "MyTalk",
  "Mytalk is a lightweight chat web application designed to provide a clear and intuitive communication experience.",
  `MyTalk is crafted to be a lightweight and efficient chat solution, providing a seamless and engaging platform for connecting with friends, family, and colleagues.`,
  myTalkMobile,
  myTalkDesktop,
  myTalk,
  "https://github.com/marceloxhenrique/MyTalk",
  "https://mytalk.dev/",
  [
    "TypeScript",
    "Tailwind",
    "React js",
    "Socket.io",
    "Node js",
    "Express js",
    "PostgreSQL",
  ],
  [myTalk, myTalk1, myTalk2, myTalk3, myTalk4],
);
export const Project: Projects[] = [MyTalk, Projectexternatic, ProjectWildQuiz];

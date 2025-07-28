import externatic from "../../public/externatic.png";
import externatic1 from "../../public/externatic1.png";
import externatic2 from "../../public/externatic2.png";
import externatic3 from "../../public/externatic3.png";
import externatic4 from "../../public/externatic4.png";
import externatic5 from "../../public/externatic5.png";
import externatic6 from "../../public/externatic6.png";
import externatic7 from "../../public/externatic7.png";

import wildQuiz from "../../public/wildQuiz.png";
import wildQuiz1 from "../../public/wildQuiz1.png";
import wildQuiz2 from "../../public/wildQuiz2.png";
import wildQuiz3 from "../../public/wildQuiz3.png";
import wildQuiz4 from "../../public/wildQuiz4.png";
import wildQuiz5 from "../../public/wildQuiz5.png";
import wildQuiz6 from "../../public/wildQuiz6.png";

import myTalk from "../../public/mytalk.png";
import myTalk1 from "../../public/mytalk1.png";
import myTalk2 from "../../public/mytalk2.png";
import myTalk3 from "../../public/mytalk3.png";
import myTalk4 from "../../public/mytalk4.png";

import dummyDataAPI from "../../public/dummyDataAPI.png";
import dummyData1 from "../../public/dummyData1.png";
import dummyData2 from "../../public/dummyData2.png";

import nexus from "../../public/nexus.png"
import nexus1 from "../../public/nexus1.png"
import nexus2 from "../../public/nexus2.png"
import nexus3 from "../../public/nexus3.png" 

import { StaticImageData } from "next/image";
class Projects {
  constructor(
    public id: number,
    public title: string,
    public text: string,
    public description: string,
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
  wildQuiz,
  "https://github.com/WildCodeSchool/2023-02-JS-FT-Lyon-P1-WildQuiz",
  "https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildQuiz/",
  ["HTML5", "CSS3", "JavaScript", "Leaflet", "Figma"],
  [wildQuiz, wildQuiz1, wildQuiz2, wildQuiz3, wildQuiz4, wildQuiz5, wildQuiz6],
);
const MyTalk: Projects = new Projects(
  3,
  "MyTalk",
  "Mytalk is a lightweight chat web application designed to provide a clear and intuitive communication experience.",
  `MyTalk is crafted to be a lightweight and efficient chat solution, providing a seamless and engaging platform for connecting with friends, family, and colleagues.`,
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
const DummyDataAPI: Projects = new Projects(
  4,
  "DummyData API",
  "DummyData is a versatile API designed to provide you with fake data in multiplelanguages English (EN) French (FR) and Portugues (BR).",
  `DummyData API is a flexible and easy-to-use API designed to provide developers with realistic mock data for testing and prototyping applications. With support for multiple languages (English, French and Portuguese) and customizable data sets, DummyData API helps developers simulate real-world data environments.`,
  dummyDataAPI,
  "https://github.com/marceloxhenrique/DummyData-API",
  "https://dummydata-2yft.onrender.com/",
  ["Java", "Spring Boot", "Thymelaf", "JUnit 5", "Swagger API"],
  [dummyDataAPI, dummyData1, dummyData2],
);

const Nexus: Projects = new Projects(
  5,
  "Nexus Beyond",
  "A blogging platform where users can write, share, and explore ideas, experiences, and knowledge.",
  `Nexus is a modern blogging platform where writers, thinkers, and creators can share their insights and stories with the world. Whether you’re passionate about technology, literature, or personal experiences, Nexus provides a seamless and engaging space for self-expression.`,
  nexus,
  "https://github.com/marceloxhenrique/Nexus",
  "https://nexus-two-indol.vercel.app/",
  ["TypeScript", "Next js", "Tailwind", "Tanstack Query", "Prisma", "AWS", "Shadcn/ui"],
  [nexus, nexus1, nexus2, nexus3],
);
export const Project: Projects[] = [
  Nexus,
  DummyDataAPI,
  MyTalk,
  Projectexternatic,
  ProjectWildQuiz,
];

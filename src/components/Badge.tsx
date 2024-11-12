import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoFigma,
  BiLogoJava,
  BiLogoSpringBoot,
  BiLogoDocker,
  BiLogoPostgresql,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJest, SiMysql, SiExpress, SiAngular } from "react-icons/si";

export const badge = [
  {
    icon: <BiLogoHtml5 />,
    title: "HTML5",
    color: "#E34F26",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoCss3 />,
    title: "CSS3",
    color: "#1572B6",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoTailwindCss />,
    title: "Tailwind",
    color: "#38B2AC",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoJavascript />,
    title: "JavaScript",
    color: "#F7DF1E",
    textColor: "#000",
  },
  {
    icon: <BiLogoTypescript />,
    title: "TypeScript",
    color: "#007ACC",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoReact />,
    title: "ReactJS",
    color: "#20232A",
    textColor: "#FFF",
  },
  {
    icon: <TbBrandNextjs />,
    title: "NextJS",
    color: "#000",
    textColor: "#FFF",
  },
  {
    icon: <SiAngular />,
    title: "Angular",
    color: "#F8174E",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoNodejs />,
    title: "NodeJS",
    color: "#43853D",
    textColor: "#FFF",
  },
  {
    icon: <SiExpress />,
    title: "ExpressJS",
    color: "#404D59",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoJava />,
    title: "Java",
    color: "#ED8B00",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoSpringBoot />,
    title: "Spring Boot",
    color: "#6DB33F",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoPostgresql />,
    title: "PostgreSQL",
    color: "#4EA94B",
    textColor: "#FFF",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    color: "#005C84",
    textColor: "#FFF",
  },

  {
    icon: <SiJest />,
    title: "Jest",
    color: "#944058",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoGit />,
    title: "Git/GitHub",
    color: "#E44C30",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoFigma />,
    title: "Figma",
    color: "#F24E1E",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoDocker />,
    title: "Docker",
    color: "#2496ED",
    textColor: "#FFF",
  },
];
import React from "react";
import "animate.css";

const Badge = () => {
  return (
    <section className="">
      <h2 className="px-3 pb-4 pt-8 text-[min(6vw,1.5rem)]  font-semibold text-[#007ACC]">
        Tech I work with:
      </h2>
      <ul
        id="Skills"
        className=" animate__animated animate__fadeInUp grid max-w-5xl grid-cols-2 px-1 pb-10 sm:grid-cols-3 md:flex md:flex-wrap"
      >
        {badge.map(
          (badge: {
            icon: React.JSX.Element;
            title: string;
            color: string;
            textColor: string;
          }) => (
            <li
              className={`m-1 flex  flex-row items-center gap-1 rounded-md bg-gray-300 px-4 py-1 font-semibold transition-all md:justify-center md:gap-1 md:hover:scale-105`}
              key={badge.title}
              style={
                {
                  // backgroundColor: `${badge.color}`,
                  // color: `${badge.textColor}`,
                }
              }
            >
              <p className="text-xl">{badge.icon}</p>
              <p className="text-center text-xs">{badge.title}</p>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Badge;

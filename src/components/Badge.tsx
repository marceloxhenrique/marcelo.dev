import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoFigma,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiPrisma, SiMysql, SiExpress } from "react-icons/si";

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
    title: "TAILWIND CSS",
    color: "#38B2AC",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoJavascript />,
    title: "JAVASCRIPT",
    color: "#F7DF1E",
    textColor: "#000",
  },
  {
    icon: <BiLogoTypescript />,
    title: "TYPESCRIPT",
    color: "#007ACC",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoReact />,
    title: "REACT.JS",
    color: "#20232A",
    textColor: "#FFF",
  },
  {
    icon: <TbBrandNextjs />,
    title: "NEXT.JS",
    color: "#000",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoNodejs />,
    title: "NODE.JS",
    color: "#43853D",
    textColor: "#FFF",
  },
  {
    icon: <SiExpress />,
    title: "EXPRESS.JS",
    color: "#404D59",
    textColor: "#FFF",
  },
  {
    icon: <SiMysql />,
    title: "MySQL",
    color: "#005C84",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoMongodb />,
    title: "MONGODB",
    color: "#4EA94B",
    textColor: "#FFF",
  },
  {
    icon: <SiPrisma />,
    title: "PRISMA",
    color: "#3982CE",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoGit />,
    title: "GIT/GITHUB",
    color: "#E44C30",
    textColor: "#FFF",
  },
  {
    icon: <BiLogoFigma />,
    title: "FIGMA",
    color: "#F24E1E",
    textColor: "#FFF",
  },
];
import React from "react";
import "animate.css";

const Badge = () => {
  return (
    <ul
      id="Skills"
      className="animate__animated animate__fadeInUp flex flex-wrap items-center justify-center rounded-md border-2 border-none py-2"
    >
      {badge.map(
        (badge: {
          icon: React.JSX.Element;
          title: string;
          color: string;
          textColor: string;
        }) => (
          <li
            className={`hover:scale-1 m-2 flex h-12 w-40 flex-row items-center justify-center gap-2 rounded-md px-1 font-semibold transition-all`}
            key={badge.title}
            style={{
              backgroundColor: `${badge.color}`,
              color: `${badge.textColor}`,
            }}
          >
            <p className="text-3xl">{badge.icon}</p>
            {badge.title}
          </li>
        ),
      )}
    </ul>
  );
};

export default Badge;

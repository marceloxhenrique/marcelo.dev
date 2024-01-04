/* eslint-disable @next/next/no-img-element */
const badge = [
  {
    url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    alt: "html5",
    color: "E34F26",
  },
  {
    url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    alt: "css3",
    color: "1572B6",
  },
  {
    url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "TAILWIND CSS",
    color: "38B2AC",
  },
  {
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    alt: "JavaScript",
    color: "F7DF1E",
  },
  {
    url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
    color: "007ACC",
  },
  {
    url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    alt: "React",
    color: "20232A",
  },
  {
    url: "https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge",
    alt: "NEXT.JS",
    color: "000",
  },
  {
    url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    alt: "Node",
    color: "43853D",
  },
  {
    url: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    alt: "Express",
    color: "404D59",
  },
  {
    url: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
    color: "005C84",
  },
  {
    url: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MONGODB",
    color: "4EA94B",
  },
  {
    url: "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
    alt: "Prisma",
    color: "3982CE",
  },
  {
    url: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
    alt: "GIT/gitHub",
    color: "E44C30",
  },
  {
    url: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    alt: "Figma",
    color: "F24E1E",
  },
];
import React from "react";
import "animate.css";

const Badge = () => {
  return (
    <section
      id="Skills"
      className="animate__animated animate__fadeInUp b flex flex-wrap items-center justify-center rounded-md border-2 border-none py-2"
    >
      {badge.map((badge: { url: string; alt: string; color: string }) => (
        <span
          className={`m-2 flex h-12 w-40 items-center justify-center overflow-hidden rounded-md bg-[#${badge.color}] transition-all hover:scale-110`}
          key={badge.alt}
        >
          <img
            src={badge.url}
            alt={badge.alt}
            className={"min-h-12 w-40 rounded-md"}
          />
        </span>
      ))}
    </section>
  );
};

export default Badge;

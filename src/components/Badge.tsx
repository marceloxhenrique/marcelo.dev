/* eslint-disable @next/next/no-img-element */
const badge = [
  {
    url: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    alt: "html5",
  },
  {
    url: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    alt: "css3",
  },
  {
    url: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "TAILWIND CSS",
  },
  {
    url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    alt: "JavaScript",
  },
  {
    url: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  {
    url: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    alt: "React",
  },
  {
    url: "https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge",
    alt: "NEXT.JS",
  },
  {
    url: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
    alt: "Node",
  },
  {
    url: "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge",
    alt: "Express",
  },
  {
    url: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
  },
  {
    url: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white",
    alt: "MONGODB",
  },
  {
    url: "https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white",
    alt: "Prisma",
  },
  {
    url: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white",
    alt: "GIT/gitHub",
  },
  {
    url: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
    alt: "Figma",
  },
];
import React from "react";
import "animate.css";

const Badge = () => {
  return (
    <section
      id="Skills"
      className="animate__animated animate__fadeInUp flex flex-wrap items-center justify-center rounded-md border-2 border-none py-2 "
    >
      {badge.map((badge: { url: string; alt: string }) => (
        <img
          src={badge.url}
          alt={badge.alt}
          key={badge.alt}
          className="m-2 h-8 w-28 rounded-md shadow-lg duration-200 hover:scale-105 md:h-12 md:w-36 lg:w-40"
        />
      ))}
    </section>
  );
};

export default Badge;

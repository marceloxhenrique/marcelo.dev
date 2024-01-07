import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/profile.png";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
const About = () => {
  return (
    <section
      id="ABOUT"
      className="flex w-full flex-col items-center justify-center p-4 pt-56 font-sans lg:flex-row"
    >
      <article className="font-primary">
        <h1 className="pb-6 text-center text-4xl font-semibold md:text-5xl">
          ABOUT
        </h1>
        <p className="max-w-4xl pb-6 text-xl text-slate-600 md:text-left">
          {`Hello! My name is Marcelo, and I am a web developer originally from Brazil, currently based in France. I'm all about creating cool digital experiences.`}
          <br />
          <br />
          {`Driven by a passion for technology and the creation of meaningful digital experiences, I am actively immersed in the world of web development. My focus centers on crafting user-friendly and visually appealing websites. I aspire to design intuitive interfaces that enhance user experiences while adhering to the latest industry standards and best practices.`}
          <br />
          <br />
          {`In my continuous pursuit of learning and professional growth, I am committed to staying updated with the dynamic landscape of web development. Eager to explore new technologies, enhance my skill set, and collaborate with talented individuals, I aim to bring innovative ideas to life. Alongside my technical aptitude, I bring a strong work ethic, adaptability, and effective communication skills to every project. I believe in the power of collaboration and building strong partnerships to achieve exceptional results.`}
        </p>
      </article>
      <Image
        src={profile}
        alt="avatar"
        className="rounded-full bg-blue-500 md:max-h-[20rem] md:max-w-[20rem]"
      />
    </section>
  );
};

export default About;

import React from "react";
import Image from "next/image";
import office from "../../public/office.png";
const About = () => {
  return (
    <section
      id="About"
      className="my-32 flex  w-full flex-col items-center p-4 pt-28 text-center lg:flex-row"
    >
      <article className="">
        <h1 className="pb-6 text-center text-4xl md:text-5xl">About</h1>
        <p className="max-w-4xl pb-6 text-left text-lg">
          {`Hey, I'm Marcelo, a web developer originally from Brazil, now living the coding life in France. I'm all about creating cool digital experiences. I've been around the web development block, focusing on making websites that are user-friendly and easy on the eyes.`}
          <br />
          <br />
          {`I'm into learning and staying updated on the latest web trends. Love trying out new tech, expanding my skills, and teaming up with cool folks to bring fresh ideas to life.`}
          <br />
          <br />
          {`Beyond the techy stuff, I'm just a regular guy who works hard and knows how to have a good time. If you're looking for a laid-back but effective collaboration, let's chat about your web development dreams and make them happen!`}
        </p>
      </article>
      <section className="max-w-2xl ">
        <Image src={office} alt="office" className=" " />
      </section>
    </section>
  );
};

export default About;

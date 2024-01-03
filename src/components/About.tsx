import React from "react";
import Image from "next/image";
import office from "../../public/office.png";
const About = () => {
  return (
    <section
      id="About"
      className="my-32 flex  w-full flex-col items-center p-4 pt-28 text-center font-sans lg:flex-row"
    >
      <article className="">
        <h1 className="pb-6 text-center text-4xl md:text-5xl">About</h1>
        <p className="max-w-4xl pb-6 text-left text-lg">
          {`Hello! My name is Marcelo, and I am a web developer originally from Brazil, currently based in France. I'm all about creating cool digital experiences.`}
          <br />
          <br />
          {`Driven by a passion for technology and the creation of meaningful digital experiences, I am actively immersed in the world of web development. My focus centers on crafting user-friendly and visually appealing websites. I aspire to design intuitive interfaces that enhance user experiences while adhering to the latest industry standards and best practices.`}
          <br />
          <br />
          {`In my continuous pursuit of learning and professional growth, I am committed to staying updated with the dynamic landscape of web development. Eager to explore new technologies, enhance my skill set, and collaborate with talented individuals, I aim to bring innovative ideas to life. Alongside my technical aptitude, I bring a strong work ethic, adaptability, and effective communication skills to every project. I believe in the power of collaboration and building strong partnerships to achieve exceptional results.`}
        </p>
      </article>
      <section className="max-w-2xl ">
        <Image src={office} alt="office" className=" " />
      </section>
    </section>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <section
      id="About"
      className="mx-auto my-32  max-w-screen-lg p-4 pt-28 text-center"
    >
      <h1 className="pb-6 text-center text-4xl md:text-5xl">About</h1>
      <p className="pb-6 text-justify text-lg">
        {`Hey there, I'm Marcelo, my journey into the tech realm has been a rollercoaster of trial, error, and a lot of "Why isn't this working?!" moments. But you know what? That's where the magic happens.`}
        <br />
        <br />
        {`When I'm not typing away at my keyboard, you'll find me exploring the wild world of different coding languages and frameworks. I thrive on the challenge of creating websites that not only work seamlessly but also look darn good doing it.`}
        <br />
        <br />
        {`Sure, I've got the technical stuff down – the languages, the frameworks, the whole shebang. But what really sets me apart is my knack for understanding what makes users tick. I'm all about building websites that people not only use but genuinely enjoy using.`}
      </p>
    </section>
  );
};

export default About;

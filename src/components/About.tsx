import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="ABOUT"
      className="flex w-full flex-col items-center justify-center pt-10"
    >
      <SectionTitle title="About" />
      <article className="w-full">
        <p className="mx-auto max-w-4xl text-lg text-slate-700 md:text-xl">
          {`Hello! I'm Marcelo, a passionate Full-Stack Web Developer dedicated to creating responsive, user-friendly interfaces and APIs using JavaScript/TypeScript and Java.`}
          <br />
          <br />
          {`Not only do I bring technical proficiency but also a strong work ethic, adaptability, autonomy and effective communication skills to every project. I believe in the power of collaboration and building strong partnerships to achieve exceptional results.`}
          <br />
          <br />
          {`I'm open to new job opportunities. Don't hesitate to contact me!`}
        </p>
      </article>
    </section>
  );
};

export default About;

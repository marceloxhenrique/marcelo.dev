import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer} id="about">
      <h1>About</h1>
      <div className={styles.textAboutme}>
        Hello! My name is <strong>Marcelo</strong>, and I am a web developer
        originally from Brazil, currently based in France. I
        have a diverse background that has shaped me both personally and
        professionally.
        <br />
        <br />
        For the past years, I have had the unique opportunity to live in France,
        For 7 years I served as soldier in the esteemed
        <strong> French Foreign Legion </strong>
        in which I achive the rank of corporal. This experience has taught me the
        values of discipline, perseverance, and teamwork. It has allowed me to
        thrive in challenging and dynamic environments while adapting to diverse
        cultures and circumstances.
        <br />
        <br />
        Driven by a passion for technology and a desire to create meaningful
        digital experiences, I have embarked on a new journey as a web
        developer. I am currently studying web development, honing my skills. My
        focus lies in creating user-friendly and visually appealing websites. 
        I strive to develop intuitive
        interfaces that enhance user experiences while aligning with the latest
        industry standards and best practices.
        <br />
        <br />
        As I continue my learning and professional growth, I am dedicated to
        staying up-to-date with the ever-evolving web development landscape. I
        am eager to embrace new technologies, expand my skill set, and
        collaborate with talented individuals to bring innovative ideas to life.
        In addition to my technical aptitude, I bring a strong work ethic,
        adaptability, and effective communication skills to every project I
        undertake. I value collaboration and believe in building <strong>
          strong
          partnerships
        </strong> to achieve exceptional results.
        <br />
        <br />
        Outside of the world of coding, I enjoy immersing myself in various
        hobbies, including exploring different cultures, practicing Jiu-jitsu,
        and engaging in outdoor activities.
        <br />
        <br /> Thank you for taking the time to learn a little about me. I look
        forward to connecting and discussing how we can work together to bring
        your web development projects to life.
      </div>
    </div>
  );
}

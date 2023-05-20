import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <h2>Front-End</h2>
        <p>ReactJS, HTML, CSS, NPM, Git/GitHub, TailwindCSS, StyledComponents</p>
        <h2>Back-End</h2>
        <p>NodeJS, ExpressJS, MySQL</p>
        <h2>Languages</h2>
        <p>JavaScript</p>
      </div>
    </div>
  )
}

import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsbox} id={styles["project1"]}></div>
        <div className={styles.projectsbox} id={styles["project2"]}></div>
        <div className={styles.projectsbox} id={styles["project3"]}></div>
        <div className={styles.projectsbox} id={styles["project2"]}></div>
        <div className={styles.projectsbox} id={styles["project3"]}></div>
        <div className={styles.projectsbox} id={styles["project1"]}></div>
      </div>
    </div>
  );
}

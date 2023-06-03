import styles from "./Projects.module.css";
import wildQuiz from "../assets/wildQuiz.png"
import projetoLogin2 from "../assets/projetoLogin2.png";
import nomads from "../assets/nomads.png";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.cardproject} id={styles["project1"]}>
          <img className={styles.cardphoto} src={wildQuiz} alt="" />
          <div className={styles.cardtext}>
            Wild Quiz is a Quizz about the city of Lyon this Project is the 1 of
            the 3 projects created during the course of Web Development Of The
            Wild Code School of Lyon
          </div>
        </div>
        <hr />
        <div className={styles.cardproject} id={styles["project1"]}>
          <img className={styles.cardphoto} src={projetoLogin2} alt="" />
          <div className={styles.cardtext}>
            Wild Quiz is a Quizz about the city of Lyon this Project is the 1 of
            the 3 projects created during the course of Web Development Of The
            Wild Code School of Lyon
          </div>
        </div>
        <hr />
        <div className={styles.cardproject} id={styles["project1"]}>
          <img className={styles.cardphoto} src={nomads} alt="" />
          <div className={styles.cardtext}>
            Wild Quiz is a Quizz about the city of Lyon this Project is the 1 of
            the 3 projects created during the course of Web Development Of The
            Wild Code School of Lyon
          </div>
        </div>
      </div>
    </div>
  );
}




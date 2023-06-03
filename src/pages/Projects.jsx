import styles from "./Projects.module.css";
import wildQuiz from "../assets/wildQuiz.png";
import projetoLogin2 from "../assets/projetoLogin2.png";
import nomads from "../assets/nomads.png";

export default function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.cardproject} id={styles["project1"]}>
          <a
            href="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WildQuiz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.cardphoto}
              src={wildQuiz}
              alt="WildQuizImg"
            />
          </a>
          <div className={styles.cardtext}>
            Wild Quiz is a Quizz about the city of Lyon, this Project is the
            first of the three projects created during the course of Web
            Development Of The Wild Code School of Lyon
          </div>
        </div>
        <div className={styles.wildtec}>
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            }
            alt="HTML5-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            }
            alt="CSS3-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            }
            alt="JavaScript-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
            }
            alt="GIT/GITHUB-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            }
            alt="Figma-badge"
          />
          <img
            id={styles["badgeleaflet"]}
            src={"https://badgen.net/badge/Leaflet/v1.9/green"}
            alt="leaflet-badge"
          />
        </div>
        <hr />
        <div className={styles.cardproject} id={styles["project1"]}>
          <a
            href="https://daily-expat.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.cardphoto}
              src={nomads}
              alt="DailyExpatImg"
            />
          </a>
          <div className={styles.cardtext}>
            Daily expat is website that have as target all the expats that are
            missing their countries and want to get news, music, photos and
            recipes of their country, this is the second of the three projects
            created during the course of Web Development Of The Wild Code School
            of Lyon
          </div>
        </div>
        <div className={styles.wildtec}>
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            }
            alt="HTML5-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            }
            alt="CSS3-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            }
            alt="JavaScript-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
            }
            alt="React-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
            }
            alt="GIT/GITHUB-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"
            }
            alt="Figma-badge"
          />
        </div>
        <hr />
        <div className={styles.cardproject} id={styles["project1"]}>
          <a
            href="https://marceloxhenrique.github.io/project-login2/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.cardphoto}
              src={projetoLogin2}
              target="_blank"
              rel="noreferrer"
            />
          </a>
          <div className={styles.cardtext}>
            Project Login2 is project used to put in practice all the skills of
            HTML5 and CSS3 learned during the course Curso em Video.
          </div>
        </div>
        <div className={styles.wildtec}>
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
            }
            alt="HTML5-badge"
          />
          <img
            id={styles["badge"]}
            src={
              "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
            }
            alt="CSS3-badge"
          />
        </div>
        <hr />
      </div>
    </div>
  );
}

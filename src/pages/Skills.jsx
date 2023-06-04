import styles from "./Skills.module.css";
import "animate.css";
import { useState } from "react"

export default function Skills() {
  const [swing, setSwing] = useState(false)
  return (
    <div className={styles.skills} id="skills">
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        <section>
          <h2>Front-End</h2>
          <ul>
            <li>
              HTML5
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                }
                alt="HTML5-logo"
              />
            </li>
            <li>
              CSS3
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                }
                alt="CSS3-logo"
              />
            </li>
            <li>
              ReactJS
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                }
                alt="ReactJS-logo"
              />
            </li>
            <li>
              Git/GitHub
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                }
                alt="GIT/GITHUB-logo"
              />
            </li>
            <li>
              TailwindCSS
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                }
                alt="TailwindCSS-logo"
              />
            </li>
          </ul>
        </section>
        <section
          onClick={() => {
            setSwing(!swing);
          }}
          className={swing && `animate__animated animate__swing`}
        >
          <h2>Back-End</h2>
          <ul>
            <li>
              NodeJS
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                }
                alt="NodeJS-logo"
              />
            </li>
            <li>
              ExpressJS
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                }
                alt="ExpressJS-logo"
              />
            </li>
            <li>
              MySQL
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"
                }
                alt="MySQL-logo"
              />
            </li>
          </ul>
        </section>
        <section id={styles["language"]}>
          <h2>Languages</h2>
          <ul>
            <li>
              JavaScript
              <img
                id={styles["logo"]}
                src={
                  "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                }
                alt="JavaScript-logo"
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

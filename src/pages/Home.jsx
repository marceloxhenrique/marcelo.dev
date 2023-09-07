import styles from "./Home.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "animate.css";
import { useState } from "react";

export default function Home() {
  const [animationHinge, setAnimationHinger] = useState(false);

  function handleAnimation() {
    // setScreenWidth(window.innerWidth)
    console.log(window.innerWidth);
    if (window.innerWidth > 700) {
      setAnimationHinger(!animationHinge);
    }
    return;
  }
  return (
    <div className={styles.homeContainer} id="home">
      <div className={styles.leftSide}>
        <p>Hi, I{"’"}m Marcelo,</p>
        <h1 className={styles.title}>a Web Developer</h1>
        <p>who builds things for the web</p>
        <div className={styles.iconContainer}>
          <a
            href="https://github.com/marceloxhenrique"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={styles.icon}></GitHubIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/marcelo-henrique-da-silva-891b36220/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={styles.icon}></LinkedInIcon>
          </a>
        </div>
      </div>
      
      <div className={styles.rightSide}>
        <div
          className={
            animationHinge ? `animate__animated animate__hinge` : undefined
          }
          onClick={handleAnimation}
        >
          <div className={styles.picture}></div>
        </div>
      </div>
    </div>
  );
}

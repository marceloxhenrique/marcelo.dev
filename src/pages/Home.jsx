import styles from "./Home.module.css";
// import profilePicture from "../assets/profilePicture.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Home() {
  return (
    <div className={styles.homeContainer} id="home">
      <div className={styles.leftSide}>
        <h1 className={styles.title}>
          Hi, I{"’"}m <br /> Marcelo
        </h1>
        <p>a  Web Developer <br /> Who build things for the web</p>
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
        <div className={styles.picture}></div>
      </div>
    </div>
  );
}

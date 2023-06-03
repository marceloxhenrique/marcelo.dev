import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

export default function Navbar() {
  
  const [hidden, setHidden] = useState(false)
  const [closeMenu, setCloseMenu] = useState (false)

  return (
    <header>
      <p>
        {"<"}/Marcelo.dev{">"}
      </p>
      <nav className={styles.rightSide}>
        <div
          className={styles.menuBurger}
          onClick={() => {
            setHidden(!hidden);
            setCloseMenu(!closeMenu);
          }}
        >
          <span
            className={styles.icon1}
            id={closeMenu ? styles["close1"] : undefined}
          ></span>
          <span
            className={styles.icon2}
            id={closeMenu ? styles["close2"] : undefined}
          ></span>
          <span
            className={styles.icon3}
            id={closeMenu ? styles["close3"] : undefined}
          ></span>
        </div>
        <ul
          className={styles.ulContainer}
          id={hidden ? styles["hidden"] : undefined}
        >
          <li>
            <Link
              onClick={() => {
                setHidden(!hidden), setCloseMenu(!closeMenu);
              }}
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setHidden(!hidden), setCloseMenu(!closeMenu);
              }}
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setHidden(!hidden), setCloseMenu(!closeMenu);
              }}
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setHidden(!hidden), setCloseMenu(!closeMenu);
              }}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setHidden(!hidden), setCloseMenu(!closeMenu);
              }}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
            Contact            
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

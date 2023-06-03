import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import styles from "./App.module.css";
import About from "./pages/About"
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className={styles.nav}>
      <Navbar />
      </div>
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <ToastContainer />
    </>
  );
}

export default App;

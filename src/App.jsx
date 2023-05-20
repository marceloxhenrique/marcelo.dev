import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div className={styles.nav}>
      <Navbar />
      </div>
      <Home />
      <Skills />
      <Projects />
    </>
  );
}

export default App;

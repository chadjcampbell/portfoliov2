import { Toaster } from "react-hot-toast";
import "./app.scss";
import { Contact } from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Toaster />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;

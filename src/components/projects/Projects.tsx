import { useRef } from "react";
import SingleProject from "./SingleProject";
import { projectArray } from "./projectArray";
import "./projects.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projectArray.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;

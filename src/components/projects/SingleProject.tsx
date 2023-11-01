import { useRef } from "react";
import { ProjectType } from "./projectArray";
import { motion, useScroll, useTransform } from "framer-motion";

type SingleProjectProps = {
  project: ProjectType;
};

const SingleProject = ({ project }: SingleProjectProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer">
            <img src={project.img} alt={`${project.name} screenshot`} />
          </div>{" "}
          <motion.div className="textContainer">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>See demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;

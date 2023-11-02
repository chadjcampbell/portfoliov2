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
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={project.img} alt={`${project.name} screenshot`} />
          </div>{" "}
          <motion.div className="textContainer" style={{ y }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="buttonContainer">
              <motion.a
                href={project.code}
                target="_blank"
                style={{
                  background: "rgb(17, 17, 50)",
                  color: "rgb(255, 255, 255)",
                }}
                whileHover={{
                  background: "rgb(211, 211, 211, 1)",
                  color: "rgb(0, 0, 0)",
                  scale: 1.05,
                }}
              >
                📑 View Code
              </motion.a>
              <motion.a
                href={project.preview}
                target="_blank"
                style={{
                  background: "rgb(17, 17, 50)",
                  color: "rgb(255, 255, 255)",
                }}
                whileHover={{
                  background: "rgb(211, 211, 211, 1)",
                  color: "rgb(0, 0, 0)",
                  scale: 1.05,
                }}
              >
                🖥️ Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;

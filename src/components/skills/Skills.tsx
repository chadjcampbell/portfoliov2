import { useRef } from "react";
import "./skills.scss";
import { motion, useInView } from "framer-motion";
import Frontend from "./skillsBoxes/Frontend";
import Backend from "./skillsBoxes/Backend";
import Databases from "./skillsBoxes/Databases";
import TheRest from "./skillsBoxes/TheRest";

const variants = {
  initial: {
    x: -100,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50%" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          If all you have is a hammer,
          <br /> everything looks like a nail.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people coding" />
          <h3>
            <b>Mastering</b> tools
          </h3>
        </div>
        <div className="title">
          <h3>
            for <b>Web</b> development.
          </h3>
          <a href="#Projects">What I've Built</a>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          style={{ background: "rgb(17, 17, 50)", color: "rgb(255, 255, 255)" }}
          whileHover={{
            background: "rgb(211, 211, 211, 1)",
            color: "rgb(0, 0, 0)",
            scale: 1.025,
          }}
          transition={{ duration: 0.2 }}
        >
          <h4>Frontend</h4>
          <Frontend />
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgb(17, 17, 50)", color: "rgb(255, 255, 255)" }}
          whileHover={{
            background: "rgb(211, 211, 211, 1)",
            color: "rgb(0, 0, 0)",
            scale: 1.025,
          }}
        >
          <h4>Backend</h4>
          <Backend />
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgb(17, 17, 50)", color: "rgb(255, 255, 255)" }}
          whileHover={{
            background: "rgb(211, 211, 211, 1)",
            color: "rgb(0, 0, 0)",
            scale: 1.025,
          }}
        >
          <h4>Databases</h4>
          <Databases />
        </motion.div>
        <motion.div
          className="box"
          style={{ background: "rgb(17, 17, 50)", color: "rgb(255, 255, 255)" }}
          whileHover={{
            background: "rgb(211, 211, 211, 1)",
            color: "rgb(0, 0, 0)",
            scale: 1.025,
          }}
        >
          <h4>The Rest</h4>
          <TheRest />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

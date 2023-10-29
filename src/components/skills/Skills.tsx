import "./skills.scss";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div className="skills">
      <motion.div className="textContainer">
        <p>
          If all you have is a hammer,
          <br /> everything looks like a nail.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="people coding" />
          <h3>
            <b>Constantly</b> mastering languages
          </h3>
        </div>
        <div className="title">
          <h3>
            and <b>Frameworks</b> for web development.
          </h3>
          <a href="#Projects">What I've Built</a>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h4>Frontend</h4>
          <p>icons/names here</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h4>Backend</h4>
          <p>icons/names here</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h4>Databases</h4>
          <p>icons/names here</p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h4>The Rest</h4>
          <p>icons/names here</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

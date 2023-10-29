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
            and <b>Framworks</b> for web development.
          </h3>
          <a href="#Projects">What I've Built</a>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <div className="box"></div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;

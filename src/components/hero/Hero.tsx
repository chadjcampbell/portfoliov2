import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CHAD J CAMPBELL</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.a
              href="#Projects"
              style={{
                background: "rgb(17, 17, 50)",
                color: "rgb(255, 255, 255)",
              }}
              whileHover={{
                background: "rgb(211, 211, 211, 1)",
                color: "rgb(0, 0, 0)",
                scale: 1.05,
              }}
              variants={textVariants}
            >
              See the Latest Works
            </motion.a>
            <motion.a
              href="#Contact"
              style={{
                background: "rgb(17, 17, 50)",
                color: "rgb(255, 255, 255)",
              }}
              whileHover={{
                background: "rgb(211, 211, 211, 1)",
                color: "rgb(0, 0, 0)",
                scale: 1.05,
              }}
              variants={textVariants}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll wheel"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Code - Create - Innovate
      </motion.div>
      <div className="imageContainer">
        <img src="/cyberChadHero-noBG.png" alt="Chads Hero Image" />
      </div>
    </div>
  );
};

export default Hero;

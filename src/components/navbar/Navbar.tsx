import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Chad J Campbell
        </motion.span>
        <div className="social">
          <a href="https://github.com/chadjcampbell" target="_blank">
            <motion.img
              src="/github.svg"
              alt="github icon"
              whileHover={{ scale: 1.1 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
            target="_blank"
          >
            <motion.img
              src="/linkedin.svg"
              alt="linkedin icon"
              whileHover={{ scale: 1.1 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

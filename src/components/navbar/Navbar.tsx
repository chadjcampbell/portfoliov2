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
          <a href="#">
            <img src="/github.svg" alt="github icon" />
          </a>
          <a href="#">
            <img src="/linkedin.svg" alt="linkedin icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import "./contact.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h2>Let's work together</h2>
        <div className="item">
          <h3>Mail</h3>
          <div className="span">chadjcampbell@gmail.com</div>
        </div>
        <div className="item">
          <h3>Location</h3>
          <div className="span">Cambridge, OH, USA</div>
        </div>
        <div className="item">
          <h3>Phone</h3>
          <div className="span">740-526-6833</div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input
            autoComplete="name"
            name="name"
            type="text"
            required
            placeholder="Name"
          />
          <input
            autoComplete="email"
            name="email"
            type="email"
            required
            placeholder="Email"
          />
          <textarea
            autoComplete="none"
            name="message"
            rows={8}
            placeholder="Message"
          ></textarea>
          <motion.button
            style={{
              background: "rgb(255, 165, 0)",
              color: "rgb(0, 0, 0)",
            }}
            whileHover={{
              background: "rgb(211, 211, 211, 1)",
              color: "rgb(0, 0, 0)",
              scale: 1.025,
            }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
};

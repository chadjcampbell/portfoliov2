import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

type LinksProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Links = ({ setOpen }: LinksProps) => {
  const items = ["Home", "Skills", "Projects", "Contact"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          onClick={() => setOpen((prev: boolean) => !prev)}
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
<div>links</div>;

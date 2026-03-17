"use client";

import { motion } from "framer-motion";

const Reveal = ({
  children,
  stagger = 0.12,
  y = 12,
  amount = 0.25,
  className = "",
}) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger },
    },
  };

  const item = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={item}>
              {child}
            </motion.div>
          ))
        : (
          <motion.div variants={item}>{children}</motion.div>
        )}
    </motion.div>
  );
};

export default Reveal;

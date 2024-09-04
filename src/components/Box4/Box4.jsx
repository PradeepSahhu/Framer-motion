import { motion, stagger } from "framer-motion";
import { useState } from "react";

export default function Box4() {
  //   const boxVariant = {
  //     starting: {
  //       x: 0,
  //       scale: 1.1,
  //       backgroundColor: "yellow",
  //     },
  //     animating: {
  //       x: 400,
  //       scale: 0.7,
  //     },
  //   };

  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="box"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li variants={listVariant} className="boxItem"></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

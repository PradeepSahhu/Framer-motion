import { motion, stagger } from "framer-motion";
import { useState } from "react";

export default function Box4() {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          rotate: [0, 45, 90, 45, 0],
          scale: [0.9, 2.1, 3, 2, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      ></motion.div>
    </div>
  );
}

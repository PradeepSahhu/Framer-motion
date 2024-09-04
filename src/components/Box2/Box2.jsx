import { motion } from "framer-motion";
import { useState } from "react";

export default function Box2() {
  return (
    <div className="box-container">
      <motion.div
        drag
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.3,
        }}
        whileTap={{
          scale: 0.8,
        }}
        dragConstraints={{
          right: 30,
          left: 20,
          top: 10,
          bottom: 10,
        }}
        className="box"
      ></motion.div>
    </div>
  );
}

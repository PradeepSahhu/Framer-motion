import { motion } from "framer-motion";
import { useState } from "react";

export default function Box1() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        initial={{
          opacity: 0.1,
        }}
        animate={{
          x: animate ? 1000 : 0,
          //   scale: 1.5,
          opacity: animate ? 1 : 0.4,
          rotate: animate ? 360 : 0,
        }}
        transition={{
          type: animate ? "spring" : "tween",
          stiffness: animate ? 80 : 100, // to make faster type spring (duration : teen)
          //   damping: 10, // to make slower type spring
        }}
        onClick={() => setAnimate(!animate)}
        className="box"
      ></motion.div>
    </div>
  );
}

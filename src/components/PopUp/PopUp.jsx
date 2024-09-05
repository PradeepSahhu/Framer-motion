import { motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";

export default function PopUp() {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(selectedId);
  });
  return (
    <div>
      <div className="box-container">
        {[1, 2, 3, 4].map((item) => {
          return (
            <motion.div
              className="boxSpecial"
              layoutId={item}
              onClick={() => setSelectedId(item)}
            >
              <motion.h5>{`Data to be shown`}</motion.h5>
              <motion.h2>{`NO data to be shown`}</motion.h2>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="animated"
            onClick={() => setSelectedId(null)}
          >
            <motion.h5>{`This is just a random message`}</motion.h5>
            <motion.h2>{`This is just a random title`}</motion.h2>
            <motion.button />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

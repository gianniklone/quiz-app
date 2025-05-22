import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10 bg-animated-green"
      animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "loop" }}
    />
  );
};

export default AnimatedBackground;

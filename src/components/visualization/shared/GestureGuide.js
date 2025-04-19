import React from 'react';
import { motion } from 'framer-motion';

export const GestureGuide = () => {
  // Path for the squiggly line with arrow - arrow appears before interface
  const path = "M30 50 C 80 50, 100 20, 150 20 S 200 50, 250 50 S 300 20, 321 20 L 341 20 L 331 10 M 341 20 L 331 30";

  // Animation for drawing the path
  const pathAnimation = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  // Animation for the "Click me!" text
  const textAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="absolute left-[-629px] top-[320px] w-[600px] h-[100px]"
      initial="hidden"
      animate="visible"
      style={{ zIndex: 30, pointerEvents: 'none' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 500 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={path}
          stroke="url(#gestureGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathAnimation}
        />
        <defs>
          <linearGradient id="gestureGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute right-[230px] top-[-30px]"
        variants={textAnimation}
      >
        <div className="text-base font-quicksand font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Click me!
        </div>
      </motion.div>
    </motion.div>
  );
};

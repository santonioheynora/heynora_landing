import React from 'react';
import { motion } from 'framer-motion';

export const GestureGuide = () => {
  // Fixed path - we'll use static paths instead of React state
  // Different paths for different screen sizes
  const mobilePath = "M30 50 C 70 50, 90 20, 140 20 S 190 50, 240 50 S 280 20, 306 20 L 316 20 L 306 10 M 316 20 L 306 30";
  const tabletPath = "M10 50 C 80 50, 120 20, 170 20 S 240 50, 310 50 S 370 20, 401 20 L 421 20 L 411 10 M 421 20 L 411 30";
  
  // Use appropriate path based on screen size
  const [currentPath, setCurrentPath] = React.useState(mobilePath);
  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCurrentPath(mobilePath);
      } else {
        setCurrentPath(tabletPath);
      }
    };
    
    // Set initial path
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // No state management needed

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
      className="absolute left-[-220px] sm:left-[-350px] md:left-[-400px] lg:left-[-450px] top-[260px] sm:top-[290px] md:top-[320px] w-[300px] sm:w-[450px] md:w-[500px] lg:w-[550px] h-[100px]"
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
          d={currentPath}
          stroke="url(#gestureGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pathAnimation}
          className="scale-[1.2] sm:scale-100 md:scale-100 lg:scale-100"
          style={{
            transformOrigin: 'left center'
          }}
        />
        <defs>
          <linearGradient id="gestureGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute right-[65px] sm:right-[45px] md:right-[60px] lg:right-[70px] top-[-23px] sm:top-[-23px]"
        variants={textAnimation}
      >
        <div className="text-sm sm:text-base font-quicksand font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Click me!
        </div>
      </motion.div>
    </motion.div>
  );
};

import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HeroSection = ({ isChatActive, isInactive }) => {
  const [headlinePosition, setHeadlinePosition] = useState(-100); // Start at inactive position

  useEffect(() => {
    // Only update position when there's a real state change
    if (isChatActive) {
      setHeadlinePosition(100);
    } else if (isInactive) {
      setHeadlinePosition(-100);
    } else {
      setHeadlinePosition(0);
    }
  }, [isChatActive, isInactive]);
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

      
      {/* HEADLINE (Large, Bold, White or Subtle Gradient) */}
      <motion.h2 
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide max-w-6xl mx-auto leading-tight"
        initial={false}
        animate={{ 
          translateY: headlinePosition
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.16, 1, 0.3, 1],
          delay: 0
        }}
        style={{ marginTop: '-260px' }}
      >
        listens to your mixes and gives real-time feedback.
      </motion.h2>
      
      {/* TYPEWRITER (Secondary Focus) - Moved to HeroSection for better organization */}
      <motion.p 
        className="text-xl md:text-2xl font-normal text-gray-300 leading-relaxed max-w-3xl mx-auto h-[90px]"
        initial={false}
        animate={{ 
          translateY: isChatActive ? 60 : 0,
          marginTop: isChatActive ? '4rem' : '3rem'
        }}
        transition={{ 
          duration: 0.5, 
          ease: [0.16, 1, 0.3, 1],
          // Ensure immediate reset when going back to inactive
          delay: isInactive ? 0 : 0.1
        }}
      >
        <Typewriter
          words={[
            "heynora.ai analyzes your mix, offers structured feedback, and helps you refine every detail.",
            "No more guessing. Get instant insights while you create.",
            "Work with a companion that understands your sound."
          ]}
          loop={true}
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
          cursor={false}
        />
      </motion.p>
    </div>
  );
};

export default HeroSection;

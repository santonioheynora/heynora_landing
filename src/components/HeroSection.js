import React, { useEffect, useState, useRef } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const HeroSection = ({ isChatActive, isInactive }) => {
  const [headlinePosition, setHeadlinePosition] = useState(-100); // Start at inactive position
  const [isFirstCycle, setIsFirstCycle] = useState(true);
  const [containerMargin, setContainerMargin] = useState(0);
  const windowSize = useWindowSize(); // Get current window dimensions


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

  // Track if we've completed the first animation cycle
  useEffect(() => {
    if (isChatActive && isFirstCycle) {
      // When we enter chat state during first cycle
      const timer = setTimeout(() => {
        setIsFirstCycle(false);
      }, 5000); // Set to false after chat state completes
      return () => clearTimeout(timer);
    }
  }, [isChatActive, isFirstCycle]);

  // Adjust container margin based on state and screen size
  useEffect(() => {
    if (!isInactive) {
      // If in chat state, keep at default position
      if (isChatActive) {
        setContainerMargin(0);
        return;
      }
      
      // For active listening state, apply responsive positioning
      const viewportHeight = windowSize.height || window.innerHeight;
      const baseActiveMargin = -25; // Base margin for small screens
      
      // Adjust margin based on screen height for active listening state
      if (viewportHeight >= 1200) { // Large screens
        setContainerMargin(baseActiveMargin * 2.5); // -62.5px
      } else if (viewportHeight >= 900) { // Medium-large screens
        setContainerMargin(baseActiveMargin * 2); // -50px
      } else if (viewportHeight >= 700) { // Medium screens
        setContainerMargin(baseActiveMargin * 1.5); // -37.5px
      } else { // Small screens
        setContainerMargin(baseActiveMargin); // -25px
      }
      return;
    }
    
    // Calculate responsive margin based on viewport height
    const baseMargin = -78; // Base margin for medium screens (increased from -65 to -78)
    const viewportHeight = windowSize.height || window.innerHeight;
    
    // Adjust margin based on screen height
    if (viewportHeight >= 1200) { // Large screens
      setContainerMargin(baseMargin * 1.5); // More negative margin (moves up more)
    } else if (viewportHeight >= 900) { // Medium-large screens
      setContainerMargin(baseMargin * 1.2);
    } else if (viewportHeight <= 700) { // Small screens
      setContainerMargin(baseMargin * 0.7); // Less negative margin (moves up less)
    } else { // Medium screens (default)
      setContainerMargin(baseMargin);
    }
  }, [isInactive, isChatActive, windowSize.height]);

  return (
    <div 
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4"
      style={{ marginTop: `${containerMargin}px` }} // Apply margin to entire container
    >

      
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
        Real-time mix feedback. From your new creative sidekick.
      </motion.h2>
      
      {/* TYPEWRITER (Secondary Focus) with different positioning based on state */}
      <div className={`transition-all duration-500 ease-in-out ${
        isInactive ? 'mt-[-80px]' : /* Further reduced from -60px to -80px for inactive state */
        isChatActive ? 'mt-[120px]' : 
        'mt-[10px]' /* Reduced from 70px to 10px for active listening state */
      }`}>
        <motion.p 
          className="text-xl md:text-2xl font-normal text-gray-300 leading-relaxed max-w-3xl mx-auto h-[90px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Typewriter
            key={`${isInactive}-${isChatActive}-${isFirstCycle}`}
            words={[
              "Hey, I’m Nora. I listen while you work and give mix tips, structure ideas, and creative support. Invite me to your sessions — I promise I won’t be a bother.",
              "Get help arranging your mixes.",
              "Your new music partner, in rhyme and rhythm."
            ]}
            loop={!isInactive}
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
            cursor={false}
          />
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;

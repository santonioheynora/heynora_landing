import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import ChatMessageDisplay from './ChatMessageDisplay';

const HeroSection = ({ isChatActive, isInactive, feedback, visualizationComponent }) => {
  const headlineControls = useAnimation();
  const [isFirstCycle, setIsFirstCycle] = useState(true);
  const [containerMargin, setContainerMargin] = useState(0);
  const windowSize = useWindowSize(); // Get current window dimensions

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

  // Simple responsive margin adjustment based on screen size
  useEffect(() => {
    const viewportHeight = windowSize.height || window.innerHeight;
    
    // Adjust margin based on screen height
    if (viewportHeight >= 1200) { // Large screens
      setContainerMargin(0); // No margin needed on large screens
    } else if (viewportHeight >= 900) { // Medium-large screens
      setContainerMargin(0);
    } else if (viewportHeight <= 700) { // Small screens
      setContainerMargin(0); // No negative margin on small screens to prevent header overlap
    } else { // Medium screens (default)
      setContainerMargin(0);
    }
  }, [windowSize.height]);

  return (
    <div 
      className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-3 sm:px-4 pt-20 sm:pt-24 md:pt-20 lg:pt-16"
      style={{ marginTop: `${containerMargin}px` }} // Apply margin to entire container
    >
      {/* Main content container with fixed spacing */}
      <div className="flex flex-col items-center">
        {/* 1. HEADLINE (Large, Bold, Glassy Modern Look) */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-wide max-w-xs sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto leading-tight sm:leading-tight glassy-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            marginTop: '30px', // Ensure proper spacing from header
            marginBottom: '5px', // Reduced spacing to bring typewriter closer
            fontFamily: 'Quicksand, sans-serif',
            padding: '0.5rem sm:0.75rem',
            fontWeight: '600',
            minHeight: '60px' // Ensure minimum height to prevent collapsing
          }}
        >
          Real-time mix feedback for your bedroom studio.
        </motion.h2>
        
        {/* Typewriter text moved directly under headline */}
        <motion.p 
          className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-300 leading-tight max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Typewriter
            key={`${isInactive}-${isChatActive}-${isFirstCycle}`}
            words={[
              "Faster feedback, better mixes, fewer creative blocks.",
              "A creative companion for every step of your creative process.",
              "Your new music partner, in rhyme and rhythm."
            ]}
            loop={!isInactive}
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
            cursor={false}
          />
        </motion.p>
        
        {/* 2. HeadphoneVisualization - Now placed directly below the headline */}
        <div className="relative mb-6 sm:mb-8 md:mb-12 lg:mb-16 -mt-2 sm:-mt-4 md:-mt-6 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px] mx-auto overflow-visible"
          style={{
            transform: 'scale(0.9)',
            transformOrigin: 'center center',
            height: 'auto',
            minHeight: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div className="w-full h-full flex items-center justify-center overflow-visible">
            {visualizationComponent}
          </div>
          
          {/* Invisible protective area to prevent hover glitches */}
          <div className="absolute w-full h-16 bottom-0 left-0 z-0"></div>
        </div>
        
        {/* 3. CTA Button (GetEarlyAccessButton) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: isInactive ? (windowSize.width < 640 ? '-110px' : windowSize.width < 1024 ? '-95px' : '-140px') : (isChatActive ? '120px' : '-20px'), // Position based on state
            marginBottom: '30px',
            transition: 'margin-top 0.5s ease'
          }}
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] mx-auto"

        >
          <ChatMessageDisplay feedback={feedback} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

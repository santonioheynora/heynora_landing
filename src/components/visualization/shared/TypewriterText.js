import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const TypewriterText = ({ text, onComplete, className = '' }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    const animate = async () => {
      console.log('Starting typing animation...');
      await controls.start({
        width: '100%',
        transition: { 
          duration: 3.5, // Increased duration for slower typing
          ease: 'easeOut',
        }
      });
      console.log('Typing animation complete, calling onComplete...');
      // Ensure the callback is called with a slight delay to ensure animation has fully completed
      setTimeout(() => {
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }, 500); // Increased delay before calling onComplete
    };
    
    animate();
  }, [controls, onComplete]);

  return (
    <div className={`relative font-quicksand font-semibold ${className}`}>
      <motion.div 
        className="whitespace-nowrap"
        initial={{ width: 0 }}
        animate={controls}
        style={{ overflow: 'hidden' }}
      >
        {text}
      </motion.div>
      <motion.div
        className="absolute right-0 top-0 h-full w-[2px] bg-gray-500"
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  );
};

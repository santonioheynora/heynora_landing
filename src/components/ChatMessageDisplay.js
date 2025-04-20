import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EarlyAccessForm from './forms/EarlyAccessForm';

// Sparkle component for button animation
const Sparkle = ({ size, color, style }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        ...style
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
        delay: Math.random() * 2
      }}
    />
  );
};

const ChatMessageDisplay = ({ feedback }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="mt-8 flex flex-col items-center justify-center space-y-4">
      {/* Waitlist CTA Button */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Sparkle effects */}
        <Sparkle size="8px" color="#FFD700" style={{ top: '-5px', left: '15%' }} />
        <Sparkle size="6px" color="#FFFFFF" style={{ top: '10%', right: '20%' }} />
        <Sparkle size="10px" color="#FFD700" style={{ bottom: '10%', left: '10%' }} />
        <Sparkle size="7px" color="#FFFFFF" style={{ bottom: '-5px', right: '15%' }} />
        <Sparkle size="5px" color="#FFD700" style={{ top: '50%', left: '5%' }} />
        <Sparkle size="9px" color="#FFFFFF" style={{ top: '30%', right: '5%' }} />
        
        {/* Button with softer gradient */}
        <motion.button 
          className="px-8 py-4 rounded-full relative overflow-hidden
                    text-white font-bold text-xl shadow-lg hover:shadow-xl
                    transform transition-all duration-300 ease-in-out
                    hover:scale-105 active:scale-95
                    border-2 border-transparent hover:border-white/20"
          style={{
            background: 'linear-gradient(90deg, rgba(250,204,21,0.8) 0%, rgba(249,115,22,0.8) 50%, rgba(236,72,153,0.8) 100%)',
            textShadow: '0 1px 1px rgba(0,0,0,0.2)'
          }}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          onClick={() => setIsFormOpen(true)}
        >
          <span className="relative z-10 flex items-center justify-center">
            <svg 
              width="22" 
              height="22" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="white"
                className="drop-shadow-md"
              />
            </svg>
            Get early access
          </span>
          
          {/* Subtle shine effect */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'linear', repeatDelay: 1 }}
          />
        </motion.button>
      </motion.div>
      
      {/* Animated Note */}
      <motion.p 
        className="text-gray-300 text-center max-w-md mt-2 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        I'm not quite groovy enough yet to launch - Promise I'll let you know when I'm ready  🎧
      </motion.p>
      
      {/* Early Access Form Modal */}
      <EarlyAccessForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default ChatMessageDisplay;

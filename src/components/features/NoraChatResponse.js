import React from 'react';
import { motion } from 'framer-motion';

const NoraChatResponse = ({ isVisible, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, y: isVisible ? 0 : 10 }}
      transition={{ duration: 0.3, delay: isVisible ? 0.2 : 0 }}
      className="absolute -top-16 -right-2 z-20 pointer-events-none"
    >
      {/* Chat bubble with gradient border */}
      <div className="relative w-[160px]">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 p-[1px]"></div>
        
        {/* Content */}
        <div className="relative bg-black/90 backdrop-blur-sm p-2.5 rounded-lg">
          <p className="text-white text-xs leading-tight">{message}</p>
        </div>
        
        {/* Tail/pointer */}
        <div className="absolute -bottom-2 right-4 w-4 h-4 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rotate-45 transform origin-top-left translate-y-1/2"></div>
          <div className="absolute top-[1px] left-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-black/90 rotate-45 transform origin-top-left translate-y-1/2"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default NoraChatResponse;

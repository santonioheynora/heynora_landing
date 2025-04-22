"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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

const NoraAssistant = () => {
  const [noraHover, setNoraHover] = useState(false);
  const [showChatResponse, setShowChatResponse] = useState(false);
  const [hoverDuration, setHoverDuration] = useState(0);
  
  // Mix tips to display
  const mixTips = [
    "Try reducing your kick level by 2-3dB around 50Hz.",
    "Pan the synth slightly to the right to open up space.",
    "Consider adding light reverb to the vocal for cohesion.",
    "Your hi-hats could use a high-pass filter around 300Hz.",
    "The bass and kick are masking each other. Try sidechaining.",
  ];
  
  // Use a fixed tip to avoid hydration errors
  const [currentTip] = useState(mixTips[0]);
  
  // Handle hover duration to show chat response after 2 seconds
  useEffect(() => {
    let timer;
    if (noraHover && !showChatResponse) {
      timer = setInterval(() => {
        setHoverDuration(prev => {
          const newDuration = prev + 100;
          if (newDuration >= 2000) {
            setShowChatResponse(true);
            clearInterval(timer);
          }
          return newDuration;
        });
      }, 100);
    } else if (!noraHover) {
      setHoverDuration(0);
      setShowChatResponse(false);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [noraHover]);
  
  return (
    <div className="relative">
      {/* Chat Response */}
      <NoraChatResponse 
        isVisible={showChatResponse} 
        message={currentTip}
      />
      
      {/* Nora Icon */}
      <motion.div
        onMouseEnter={() => setNoraHover(true)}
        onMouseLeave={() => setNoraHover(false)}
        animate={{ scale: noraHover ? 1.2 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="cursor-pointer relative"
      >
        {/* Add a subtle glow effect when hovering */}
        {noraHover && (
          <motion.div 
            className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-pink-500/20 rounded-full blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <Image
          src={noraHover ? "/assets/Active Listening Combined.svg" : "/assets/Inactive Combined.svg"}
          alt="HeyNora Assistant"
          width={noraHover ? 120 : 60}
          height={noraHover ? 120 : 60}
          className="select-none relative z-10"
        />
      </motion.div>
    </div>
  );
};

export default NoraAssistant;

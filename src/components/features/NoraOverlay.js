import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVisualizationState } from '../../hooks/useVisualizationState';
import Image from 'next/image';

// Nora states
const NoraState = {
  INACTIVE: 'inactive',
  LISTENING: 'listening',
  CHAT: 'chat'
};

const NoraOverlay = () => {
  const [state, setState] = useState(NoraState.INACTIVE);
  const [isHovered, setIsHovered] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const { isInactive, isListening, isChatActive } = useVisualizationState();

  // Simulate Nora's state based on hover and click
  useEffect(() => {
    if (isHovered) {
      setState(NoraState.LISTENING);
    } else {
      setState(NoraState.INACTIVE);
    }
  }, [isHovered]);

  // Handle click to show feedback
  const handleClick = () => {
    setState(NoraState.CHAT);
    setFeedbackVisible(true);
  };

  // Render different states of Nora
  const renderNoraContent = () => {
    switch (state) {
      case NoraState.INACTIVE:
        return (
          <motion.div 
            className="flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/assets/Inactive Combined.svg"
              alt="HeyNora Inactive State"
              width={60}
              height={60}
              className="cursor-pointer"
            />
          </motion.div>
        );
      
      case NoraState.LISTENING:
        return (
          <motion.div 
            className="flex flex-col items-center"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={handleClick}
          >
            <div className="relative">
              <Image
                src="/assets/Active Listening Combined.svg"
                alt="HeyNora Listening State"
                width={80}
                height={80}
                className="cursor-pointer"
              />
              {/* Pulsing animation */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-pink-500/30"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
            <span className="text-xs mt-1 text-white bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">🎧 Need help with your mix?</span>
          </motion.div>
        );
      
      case NoraState.CHAT:
        return (
          <motion.div 
            className="bg-black/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl w-[350px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="text-yellow-400"><StarIcon /></div>
                <span className="font-bold text-white">Nora</span>
              </div>
              <button 
                className="text-gray-400 hover:text-white"
                onClick={() => {
                  setState(NoraState.INACTIVE);
                  setFeedbackVisible(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-gray-800/50 rounded-lg text-sm text-white">
                <p className="font-medium mb-1">Your mix sounds good, but I noticed a few things:</p>
                <ul className="list-disc pl-5 text-gray-300 space-y-1">
                  <li>The kick and bass are competing around 80-100Hz</li>
                  <li>Snare could use more presence (try +2dB at 3kHz)</li>
                  <li>Overall mix is a bit dark - consider a gentle shelf at 10kHz</li>
                </ul>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-xs font-medium py-2 px-3 rounded-lg">
                  Apply Suggestions
                </button>
                <button className="flex-1 bg-gray-700 text-white text-xs font-medium py-2 px-3 rounded-lg">
                  Ask More
                </button>
              </div>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className="absolute bottom-4 right-4 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!feedbackVisible) {
          setIsHovered(false);
        }
      }}
    >
      <AnimatePresence mode="wait">
        {renderNoraContent()}
      </AnimatePresence>
    </div>
  );
};

export default NoraOverlay;

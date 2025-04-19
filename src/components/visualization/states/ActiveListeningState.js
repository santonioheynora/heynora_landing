import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HeadphonesBase } from '../shared/HeadphonesBase';
import { Logo } from '../shared/Logo';
import { SoundWaves } from '../shared/SoundWaves';
import { TypewriterText } from '../shared/TypewriterText';
import { GestureGuide } from '../shared/GestureGuide';

export const ActiveListeningState = ({ show, listening, onChatClick }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [showChatInterface, setShowChatInterface] = useState(false);
  const [showGesture, setShowGesture] = useState(false);

  useEffect(() => {
    if (show && !showChatInterface) {
      // Show gesture guide after the state becomes visible
      const timer = setTimeout(() => setShowGesture(true), 1000);
      return () => clearTimeout(timer);
    }
    // Hide gesture when chat interface appears
    if (showChatInterface || !show) {
      setShowGesture(false);
    }
  }, [show, showChatInterface]);

  const handleChatInterfaceClick = (e) => {
    // Stop event propagation to prevent parent clicks
    e.stopPropagation();
    console.log('Chat interface clicked!');
    
    if (!isTyping) {
      // Start typing animation
      setShowChatInterface(true);
      setIsTyping(true);
    } else if (isTyping && showChatInterface) {
      // If already typing, force transition to chat state
      console.log('Forcing transition to chat state...');
      onChatClick();
    }
  };

  const handleTypingComplete = () => {
    // Wait 1 second after typing completes before transitioning to chat state
    // This gives the user time to read the question before seeing the response
    console.log('Typing complete, transitioning to chat state in 1 second...');
    
    // Force transition to chat state after typing completes
    setTimeout(() => {
      console.log('Executing onChatClick...');
      onChatClick();
      // Double-check with additional timeout to ensure transition happens
      setTimeout(() => {
        console.log('Additional check for chat transition...');
        onChatClick();
      }, 500);
    }, 1000);
  };

  return (
    <div 
      className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <HeadphonesBase />
      <Logo />
      
      {/* MixChat Logo */}
      <div className="absolute top-[130px] left-1/2 transform -translate-x-1/2">
        <Image
          src="/assets/MixChat Logo.svg"
          alt="MixChat Logo"
          width={200}
          height={40}
          priority
          className="select-none"
        />
      </div>
      
      {/* AI Symbol */}
      <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2">
        <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 flex items-center justify-center">
          <Image
            src="/assets/AI Symbol.svg"
            alt="AI Symbol"
            width={110}
            height={110}
            priority
            className="select-none"
          />
        </div>
      </div>
      
      {/* Pulsing Mic Button Effect */}
      {listening && (
        <motion.div 
          className="absolute top-[260px] left-1/2 transform -translate-x-1/2 w-[160px] h-[160px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5
          }}
        />
      )}
      
      <SoundWaves />
      
      {/* Gesture Guide */}
      <AnimatePresence>
        {showGesture && (
          <GestureGuide />
        )}
      </AnimatePresence>
      
      {/* Chat Interface */}
      <div 
        className="absolute top-[320px] left-1/2 transform -translate-x-1/2 w-[750px] z-10"
        onClick={(e) => {
          e.stopPropagation();
          handleChatInterfaceClick(e);
        }}
      >
        <div 
          className="relative w-full h-[60px] rounded-full p-[2px] bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 cursor-pointer"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="absolute inset-0 bg-white rounded-full m-[1px] flex items-center justify-center px-6">
            <AnimatePresence mode="wait">
              {!showChatInterface && (
                <motion.p
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 text-4xl font-semibold text-center"
                >
                  Ask Nora
                </motion.p>
              )}
              {showChatInterface && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onAnimationComplete={() => {
                    console.log('Motion animation complete, forcing transition');
                    setTimeout(() => onChatClick(), 2000);
                  }}
                  className="flex-1 text-gray-700 text-center"
                >
                  <TypewriterText 
                    text="How can I improve my mix?" 
                    onComplete={handleTypingComplete}
                    className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 rounded-full p-[1px]">
              <div className="bg-white rounded-full p-2">
                <Image
                  src="/assets/Chat Interface Mic.svg"
                  alt="Chat Interface Mic"
                  width={30}
                  height={30}
                  priority
                  className="select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

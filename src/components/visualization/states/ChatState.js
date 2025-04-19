import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { HeadphonesBase } from '../shared/HeadphonesBase';
import { Logo } from '../shared/Logo';
import { SoundWaves } from '../shared/SoundWaves';
import { TypewriterText } from '../shared/TypewriterText';
import UserBubble from '../shared/UserBubble';
import NoraBubble from '../shared/NoraBubble';

export const ChatState = ({ show, onComplete }) => {
  const controls = useAnimation();
  const bubbleControls = useAnimation();
  const [showNoraResponse, setShowNoraResponse] = useState(false);
  const [showResponseText, setShowResponseText] = useState(false);
  const [chatMoved, setChatMoved] = useState(false);
  
  useEffect(() => {
    if (show) {
      const animateSequence = async () => {
        // 1. Initial appearance of chat input
        await controls.start({ opacity: 1, y: 0 });
        
        // 2. Wait a moment before showing user bubble
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 3. Move chat input down to make room for bubbles - ONLY MOVE DOWN, NOT RIGHT using CSS
        setChatMoved(true);
        
        // 4. Show user bubble
        await bubbleControls.start({ opacity: 1, y: 0 });
        
        // 5. Wait a moment before showing Nora's response
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 6. Show Nora's response bubble
        setShowNoraResponse(true);
        
        // 7. Wait a moment before showing response text
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 8. Show and animate response text
        setShowResponseText(true);

        // 9. Wait 4.5 seconds after all animations complete
        await new Promise(resolve => setTimeout(resolve, 4500));
        
        // 10. Trigger transition back to inactive state
        if (onComplete) {
          onComplete();
        }
      };
      
      animateSequence();
    }
  }, [show, controls, bubbleControls]);
  
  return (
    <div 
      className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out p-0 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <HeadphonesBase />
      <Logo />
      
      {/* Middle Sound Wave */}
      <div className="absolute top-[174px] left-1/2 transform -translate-x-1/2">
        <Image
          src="/assets/Middle Sound Wave.svg"
          alt="Middle Sound Wave"
          width={120}
          height={80}
          className="animate-pulse"
        />
      </div>
      
      <SoundWaves />
      
      {/* User Question Bubble - in its own container */}
      <motion.div
        className="absolute top-[290px] left-[calc(50%-170px)] transform w-[400px]"
        initial={{ opacity: 0, y: -20 }}
        animate={bubbleControls}
      >
        {/* User Question Bubble - Right Aligned */}
        <div className="flex justify-end relative mr-[-20px]">
          <div className="relative">
            <UserBubble />
          </div>
        </div>
      </motion.div>
      
      {/* Nora Response Bubble - in its own container */}
      {showNoraResponse && (
        <motion.div 
          className="absolute top-[328px] left-[calc(50%-170px-68px)] transform w-[340px] overflow-visible p-0"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 15 }}
          transition={{ duration: 0.5 }}
        >
            <div className="relative p-0 m-0">
              <NoraBubble />

            </div>
        </motion.div>
      )}
      
      {/* Chat Interface - Pure CSS transition for vertical movement */}
      <div 
        className={`absolute left-1/2 transform -translate-x-1/2 w-[600px] transition-all duration-500 ${chatMoved ? 'top-[455px]' : 'top-[355px]'}`}
      >

        <div className="relative w-full h-[60px] rounded-full p-[2px] bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
          <div className="absolute inset-0 bg-white rounded-full m-[1px] flex items-center justify-center px-8">
            <motion.div
              className="w-full text-center"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ delay: 0.3 }}
            >
              <p className="font-quicksand text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 text-4xl font-semibold text-center">
                Ask Nora
              </p>
            </motion.div>
          </div>
          
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
  );
};

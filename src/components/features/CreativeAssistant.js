"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ChatBubble = ({ isUser, message, delay = 0 }) => {
  return (
    <motion.div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      {isUser ? (
        <div className="bg-gray-700/60 rounded-2xl rounded-tr-none p-3 max-w-[70%] text-white text-sm">
          {message}
        </div>
      ) : (
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl rounded-tl-none bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 p-[1px]"></div>
          <div className="relative bg-black/80 p-3 rounded-2xl rounded-tl-none">
            <p className="text-white text-sm">{message}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const CreativeAssistant = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  
  // Start pulsing animation for inactive state
  useEffect(() => {
    if (!isActive) {
      const interval = setInterval(() => {
        setIsPulsing(prev => !prev);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isActive]);
  
  return (
    <div className="absolute bottom-4 right-4 z-50">
      {/* Inactive State with Pulsing Animation */}
      {!isActive && (
        <motion.div
          animate={{ scale: isPulsing ? 1.05 : 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="cursor-pointer relative"
          onClick={() => setIsActive(true)}
        >
          <motion.div 
            className="absolute -inset-2 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-pink-500/10 rounded-full blur-md"
            animate={{ opacity: isPulsing ? 0.8 : 0.2 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <Image
            src="/assets/Inactive Combined.svg"
            alt="HeyNora Assistant"
            width={60}
            height={60}
            className="select-none relative z-10"
          />
        </motion.div>
      )}
      
      {/* Active Chat State */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 right-0 w-[320px] z-50"
          >
            <div className="relative">
              {/* Chat Container with Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 p-[1.5px]"></div>
              <div className="relative bg-black/90 backdrop-blur-md rounded-2xl p-4">
                {/* Chat Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-bold text-white text-sm">Nora</span>
                  </div>
                  <button 
                    onClick={() => setIsActive(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                
                {/* Chat Messages */}
                <div className="h-[200px] overflow-y-auto mb-4 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                  <ChatBubble isUser={true} message="I'm stuck on this track. Any ideas?" delay={0.3} />
                  <ChatBubble isUser={false} message="Need help writing a verse? Try starting with a question to your listener, then answer it in the next line." delay={0.6} />
                  <ChatBubble isUser={true} message="The beat feels boring after 8 bars..." delay={0.9} />
                  <ChatBubble isUser={false} message="Try changing the drum pattern in bar 9 or add a subtle fill every 8 bars." delay={1.2} />
                </div>
                
                {/* Chat Input */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 p-[1px]"></div>
                  <div className="relative flex items-center bg-black/60 rounded-full px-4 py-2">
                    <input 
                      type="text" 
                      placeholder="Ask Nora for creative ideas..." 
                      className="bg-transparent text-white text-sm flex-1 outline-none" 
                      disabled 
                    />
                    <button className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 flex items-center justify-center flex-shrink-0 ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"></path>
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreativeAssistant;

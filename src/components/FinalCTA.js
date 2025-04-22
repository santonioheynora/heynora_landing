"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EarlyAccessForm from './forms/EarlyAccessForm';

const FinalCTA = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // State to control the form modal
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Open the early access form modal
  const openEarlyAccessForm = () => {
    setIsFormOpen(true);
  };

  // Close the early access form modal
  const closeEarlyAccessForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="relative w-full bg-black py-24 px-6 overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/80 z-0"></div>
      
      {/* Subtle animated gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Headline */}
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
            Wanna try me out early?
          </span>
        </motion.h2>
        
        {/* Body Copy */}
        <motion.p 
          variants={itemVariants} 
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          I'm still learning, but I've got producers lining up to see what I can do. Join my alpha testing group and help shape the future of AI music assistants.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <button 
            onClick={openEarlyAccessForm}
            className="relative group"
          >
            {/* Button glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <div className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center">
              <span className="text-white font-medium text-lg">
                Get early access
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-orange-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        </motion.div>
        
        {/* Traction Subline */}
        <motion.p 
          variants={itemVariants} 
          className="text-sm text-gray-400 max-w-3xl mx-auto italic"
        >
          I've already got early testers — including pioneers of Detroit Techno like <span className="text-orange-400 font-medium">Santonio Echols</span>, and a bunch of talented artists from across the U.S. and beyond.
        </motion.p>
      </motion.div>

      {/* Early Access Form Modal */}
      <EarlyAccessForm isOpen={isFormOpen} onClose={closeEarlyAccessForm} />
    </section>
  );
};

export default FinalCTA;

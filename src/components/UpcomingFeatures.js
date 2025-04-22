"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: 'Mix+Chat (Streaming Mode)',
    desc: 'Talk to Nora while you work. Ask questions, get instant feedback — all hands-free.',
    icon: (
      <Image
        src="/assets/AI Symbol.svg"
        alt="AI Symbol"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    ),
    gradient: 'from-yellow-400 to-orange-500',
    customIconBg: true
  },
  {
    title: 'Nora Generated Chords & Melodies',
    desc: 'Ask Nora for progressions, motifs, or loops. Perfect for jumpstarting ideas.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
        <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
      </svg>
    ),
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'AI Sample Generator',
    desc: 'In the future, Nora will create WAV loops and stems tailored to your genre.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
      </svg>
    ),
    gradient: 'from-pink-500 to-purple-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const UpcomingFeatures = () => {
  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto pt-10 pb-24 px-6 md:px-10">
      <motion.div 
        className="mb-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
            More coming soon...
          </span>
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-1 text-xl text-gray-300 max-w-3xl mx-auto">
          I'm evolving — here's a sneak peek.
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="relative group"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
              {/* Icon */}
              <div className={`w-12 h-12 ${feature.customIconBg ? 'bg-white' : `bg-gradient-to-br ${feature.gradient}`} rounded-lg flex items-center justify-center mb-6 ${feature.customIconBg ? '' : 'text-white'}`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{feature.desc}</p>
              
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center mt-auto">
                <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
                  Coming Soon
                </span>
                <div className="ml-2 w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default UpcomingFeatures;

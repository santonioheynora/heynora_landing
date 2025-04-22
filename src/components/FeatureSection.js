import React from 'react';
import { motion } from 'framer-motion';
import DAWWireframe from './features/DAWWireframe';
import CreativeDAWWireframe from './features/CreativeDAWWireframe';

const FeatureSection = () => {
  // Animation variants for staggered animations
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25
      }
    }
  };

  return (
    <section className="relative z-10 w-full max-w-6xl mx-auto mt-0 mb-16 px-6 md:px-10">
      <motion.div 
        className="mb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px" }}
        variants={containerVariants}
      >
        {/* Feature 1: Real-Time Mix Feedback */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
            Mix better without second-guessing.
            </span>
          </h2>
          <p className="mt-1 text-xl text-gray-300 max-w-3xl mx-auto">
           Get instant suggestions—EQ, balance, tone—while you build your track.
          </p>
        </motion.div>
        
        {/* DAW Wireframe */}
        <motion.div 
          variants={itemVariants}
          className="mt-12"
        >
          <div className="relative">
            {/* Glow effect behind the DAW */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            
            {/* DAW Wireframe Component */}
            <div className="relative">
              <DAWWireframe />
            </div>
            
            {/* Feature Highlights */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Listening</h3>
                <p className="text-gray-300">Nora analyzes your mix as you work, detecting issues before they become problems.</p>
              </div>
              
              <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Actionable Feedback</h3>
                <p className="text-gray-300">Get specific EQ, compression, and balance suggestions you can apply immediately.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Feature 2: Beat Creative Block */}
      <motion.div 
        className="mt-24 mb-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
              Beat creative block with Nora.
            </span>
          </h2>
          <p className="mt-1 text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're staring at an empty timeline or looping the same 4 bars, I'm here to help spark something new. Ask for songwriting ideas, arrangement tips, or even genre flips through chat.
          </p>
        </motion.div>
        
        {/* Creative Block Visual with DAW Wireframe */}
        <motion.div 
          variants={itemVariants}
          className="mt-12"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Glow effect behind the DAW */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            
            {/* Creative DAW Wireframe Component */}
            <div className="relative">
              <CreativeDAWWireframe />
            </div>
            
            {/* Feature Highlights */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Feature 1: Creative Suggestions */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
                    <path d="M12 6c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75v-6c0-.41-.34-.75-.75-.75zM12 16c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Creative Suggestions</h3>
                <p className="text-gray-300">Nora helps you push past creative blocks by offering lyric ideas, beat switch-ups, and arrangement prompts through chat.</p>
              </div>
              
              {/* Feature 2: Idea Generation */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
                    <path d="M12 6c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Idea Generation <span className="text-xs font-normal text-gray-400 ml-2">Coming Soon</span></h3>
                <p className="text-gray-300">You'll soon get full-on musical suggestions — from chord progressions to melody lines and sample clips.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;

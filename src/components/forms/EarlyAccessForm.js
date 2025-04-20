import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EarlyAccessForm = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Load Tally.io script only when needed
    if (isOpen) {
      const existingScript = document.getElementById("tally-script");
      
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.id = "tally-script";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-2xl max-w-xl mx-auto text-center relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 -z-10"></div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close form"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {/* Star icon */}
            <div className="mb-6">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="white"
                  className="drop-shadow-md"
                />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 mb-4 font-quicksand">Hey, I'm Nora 👋</h2>
            
            <p className="text-lg text-white/80 mb-8">
              I'm not quite groovy enough to launch. Join my waitlist and I'll ping you when I'm ready to join your sessions 🎧
            </p>
            
            {/* Tally.io embed button */}
            <button
              data-tally-open="31BqKO"
              data-tally-layout="modal"
              data-tally-width="500"
              data-tally-emoji-text="🎧"
              data-tally-emoji-animation="wave"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition transform duration-200 flex items-center justify-center mx-auto"
            >
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
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EarlyAccessForm;

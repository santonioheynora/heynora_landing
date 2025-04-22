import React from 'react';
import { motion } from 'framer-motion';

const GradientBackground = () => {
  return (
    <>
      {/* GRADIENT BACKGROUND */}
      <motion.div
        animate={{ backgroundPosition: ["0% 50%", "30% 50%", "70% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-[#86EFAC] via-[#60A5FA] to-[#60A5FA] opacity-20 blur-3xl"
      />

      {/* OPTIONAL BACKSPLASH */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full"
          animate={{ backgroundPosition: ["0% 50%", "20% 70%", "60% 100%", "80% 70%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(134,239,172,0.3), rgba(96,165,250,0.5), rgba(96,165,250,0.4), rgba(244,114,182,0.2))",
            backgroundSize: "200% 200%",
          }}
        />
      </div>
    </>
  );
};

export default GradientBackground;

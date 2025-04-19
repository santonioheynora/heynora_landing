import React from 'react';
import { motion } from 'framer-motion';

const AudioWaves = ({ listening, getWaveHeight, getWaveColor, position }) => {
  const isLeft = position === 'left';
  
  return (
    <div 
      className={`absolute ${isLeft ? 'left-[-29px]' : 'right-[-29px]'} top-[130px] flex items-center gap-[8px] z-20`}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`${position}-wave-${i}`}
          animate={{ 
            height: listening 
              ? [
                  getWaveHeight(i, 6),
                  getWaveHeight(i, 6) + 15,
                  getWaveHeight(i, 6)
                ] 
              : getWaveHeight(i, 6) // Static height when not listening
          }}
          transition={{ 
            repeat: listening ? Infinity : 0, // Only repeat if listening
            duration: 2,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          className="rounded-[4px]"
          style={{
            transformOrigin: 'center',
            width: '6px',
            backgroundColor: getWaveColor(i)
          }}
        />
      ))}
    </div>
  );
};

export default AudioWaves;

import React from 'react';

const ChatMessageDisplay = ({ feedback }) => {
  return (
    <div className="mt-8 relative transition-all duration-500 ease-in-out opacity-100 animate-fadeIn">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 
                    w-0 h-0 border-l-[8px] border-l-transparent 
                    border-b-[12px] border-b-pink-500/20
                    border-r-[8px] border-r-transparent
                    transition-all duration-300 ease-in-out">
      </div>
      <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-blue-400/20 
                    backdrop-blur-sm border border-pink-500/30 shadow-lg
                    transition-all duration-300 ease-in-out">
        <p className="text-white/90 text-lg">
          {feedback}
        </p>
      </div>
    </div>
  );
};

export default ChatMessageDisplay;

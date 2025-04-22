import React from 'react';

const HeadphonesMic = ({ handleMicClick }) => {
  return (
    <div className="relative w-[300px] h-[227px] flex items-center justify-center">
      {/* Headphones */}
      <svg viewBox="0 0 200 140" className="absolute w-[300px] h-[220px] text-white" preserveAspectRatio="xMidYMid meet">
        {/* Headband */}
        <path
          d="M52 85.5 C58 30, 138 28, 149 85.5"
          stroke="url(#gradBand)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Left Earphone */}
        <rect x="44" y="90" width="14" height="40" rx="10" fill="url(#gradLeft)" />
        
        {/* Right Earphone */}
        <rect x="142" y="90" width="14" height="40" rx="10" fill="url(#gradRight)" />

        <defs>
          {/* Left Earphone Gradient */}
          <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FCD34D" /> {/* Yellow */}
            <stop offset="100%" stopColor="#FB923C" /> {/* Orange */}
          </linearGradient>

          {/* Headband Gradient */}
          <linearGradient id="gradBand" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB923C" /> {/* Orange */}
            <stop offset="33%" stopColor="#F472B6" /> {/* Pink */}
            <stop offset="66%" stopColor="#C084FC" /> {/* Purple */}
            <stop offset="100%" stopColor="#93C5FD" /> {/* Blue */}
          </linearGradient>

          {/* Right Earphone Gradient */}
          <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#93C5FD" /> {/* Blue */}
            <stop offset="100%" stopColor="#86EFAC" /> {/* Green */}
          </linearGradient>
        </defs>
      </svg>

      {/* Clickable Mic */}
      <div
        onClick={handleMicClick}
        className="absolute top-[130px] left-1/2 transform -translate-x-1/2
                   w-20 h-20 flex items-center justify-center
                   rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400
                   cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 1.75a2.25 2.25 0 00-2.25 2.25v5.25a2.25 2.25 0
              004.5 0V4A2.25 2.25 0 0012 1.75zM6.75 9.25a5.25 5.25 0
              0010.5 0 .75.75 0 111.5 0 6.75 6.75 0
              01-6 6.708V18h2.25a.75.75 0
              010 1.5h-6a.75.75 0
              010-1.5H10.5v-2.042a6.75 6.75 0
              01-6-6.708.75.75 0 011.5 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeadphonesMic;

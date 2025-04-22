import React from 'react';
import Image from 'next/image';

export const InactiveState = ({ show }) => (
  <div 
    className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${
      show ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    {/* Headphones */}
    <div className="relative top-[15px] sm:top-[20px] md:top-[25px] scale-75 sm:scale-90 md:scale-100">
      <Image
        src="/assets/headphones.svg"
        alt="HeyNora Headphones"
        width={292}
        height={316}
        priority
        className="select-none h-auto"
      />
    </div>
    
    {/* MixChat Logo */}
    <div className="absolute top-[85px] sm:top-[80px] md:top-[95px] left-1/2 transform -translate-x-1/2 scale-75 sm:scale-90 md:scale-100">
      <Image
        src="/assets/MixChat Logo.svg"
        alt="MixChat Logo"
        width={200}
        height={40}
        priority
        className="select-none h-auto"
      />
    </div>
    
    {/* AI Symbol */}
    <div className="absolute top-[115px] sm:top-[105px] md:top-[125px] left-1/2 transform -translate-x-1/2">
      <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400 flex items-center justify-center">
        <Image
          src="/assets/AI Symbol.svg"
          alt="AI Symbol"
          width={80}
          height={80}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 95px, 110px"
          priority
          className="select-none w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[110px] md:h-[110px]"
        />
      </div>
    </div>
  </div>
);

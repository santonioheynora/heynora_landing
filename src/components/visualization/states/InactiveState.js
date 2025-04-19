import React from 'react';
import Image from 'next/image';

export const InactiveState = ({ show }) => (
  <div 
    className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out ${
      show ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <Image
      src="/assets/Inactive Combined.svg"
      alt="HeyNora Headphones Inactive"
      width={292}
      height={316}
      priority
      className="select-none"
    />
  </div>
);

import React from 'react';
import Image from 'next/image';

export const Star = () => (
  <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2">
    <div className="relative w-[80px] h-[80px]">
      <Image
        src="/assets/Inactive Combined.svg#star"
        alt="Star"
        width={80}
        height={80}
        priority
        className="select-none"
      />
    </div>
  </div>
);

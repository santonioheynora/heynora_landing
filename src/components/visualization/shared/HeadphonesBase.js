import React from 'react';
import Image from 'next/image';

export const HeadphonesBase = () => (
  <div className="relative top-[60px]">
    <Image
      src="/assets/headphones.svg"
      alt="HeyNora Headphones Active"
      width={292}
      height={316}
      priority
      className="select-none"
    />
  </div>
);

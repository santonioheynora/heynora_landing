import React from 'react';
import Image from 'next/image';

export const HeadphonesBase = () => (
  <div className="relative top-[30px] sm:top-[45px] md:top-[60px] flex items-center justify-center">
    <Image
      src="/assets/headphones.svg"
      alt="HeyNora Headphones Active"
      width={292}
      height={316}
      priority
      className="select-none w-[250px] h-auto sm:w-[270px] md:w-[292px]"
      style={{
        objectFit: 'contain',
        maxWidth: '100%'
      }}
    />
  </div>
);

import React from 'react';
import Image from 'next/image';

export const Logo = () => (
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <Image
      src="/assets/logo.svg"
      alt="heynora.ai Logo"
      width={344}
      height={63}
      style={{
        transform: 'scale(2)',
        transformOrigin: 'center center'
      }}
      priority
      className="select-none"
    />
  </div>
);

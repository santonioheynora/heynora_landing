import React from 'react';
import Image from 'next/image';

const HeyNoraLogo = () => {
  return (
    <div className="flex justify-center mb-8 pt-32">
      <Image
        src="/assets/logo.svg"
        alt="HeyNora.ai Logo"
        width={300}
        height={120}
        priority
        className="select-none"
      />
    </div>
  );
};

export default HeyNoraLogo;

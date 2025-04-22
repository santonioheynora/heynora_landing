import React from 'react';
import Image from 'next/image';

export const SoundWaves = () => {
  return (
    <>
      <div className="absolute left-[-100px] sm:left-[-110px] md:left-[-135px] top-[120px] sm:top-[145px] md:top-[170px] flex items-center gap-[8px] z-20">
        <Image
          src="/assets/Left Side Sound Wave.svg"
          alt="Left Sound Wave"
          width={126}
          height={252}
          className="animate-pulse w-[110px] sm:w-[120px] md:w-[126px] h-auto scale-90 sm:scale-95 md:scale-100 translate-x-[10px] sm:translate-x-[5px] md:translate-x-0 transition-transform duration-300"
          style={{ 
            objectFit: 'contain',
            height: 'auto'
          }}
        />
      </div>
      <div className="absolute right-[-100px] sm:right-[-110px] md:right-[-135px] top-[120px] sm:top-[145px] md:top-[170px] flex items-center gap-[8px] z-20">
        <Image
          src="/assets/Right Sound Wave.svg"
          alt="Right Sound Wave"
          width={126}
          height={252}
          className="animate-pulse w-[110px] sm:w-[120px] md:w-[126px] h-auto scale-90 sm:scale-95 md:scale-100 -translate-x-[10px] sm:-translate-x-[5px] md:translate-x-0 transition-transform duration-300"
          style={{ 
            objectFit: 'contain',
            height: 'auto'
          }}
        />
      </div>
    </>
  );
};

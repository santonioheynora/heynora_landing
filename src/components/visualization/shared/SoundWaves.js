import React from 'react';
import Image from 'next/image';

export const SoundWaves = () => (
  <>
    <div className="absolute left-[-135px] top-[170px] flex items-center gap-[8px] z-20">
      <Image
        src="/assets/Left Side Sound Wave.svg"
        alt="Left Sound Wave"
        width={126}
        height={252}
        className="animate-pulse"
      />
    </div>
    <div className="absolute right-[-135px] top-[170px] flex items-center gap-[8px] z-20">
      <Image
        src="/assets/Right Sound Wave.svg"
        alt="Right Sound Wave"
        width={126}
        height={252}
        className="animate-pulse"
      />
    </div>
  </>
);

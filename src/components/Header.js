import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 backdrop-blur-md bg-black/30 z-20">
      {/* Logo SVG */}
      <div className="flex items-center">
        <Image
          src="/assets/logo.svg"
          alt="heynora.ai Logo"
          width={120}
          height={22}
          priority
          className="select-none"
          style={{
            transform: 'scale(2)',
            transformOrigin: 'left center'
          }}
        />
      </div>

      {/* CTA: Join Our Discord */}
      <Link
        href="https://discord.gg/zYzwAjv9"
        target="_blank"
        rel="noopener noreferrer"
        className="text-md font-medium px-5 py-2 rounded-lg 
                   bg-[#F472B6] hover:bg-[#E55CAA] transition
                   text-white tracking-wide"
      >
        Join Our Discord
      </Link>
    </header>
  );
};

export default Header;

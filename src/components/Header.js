import React, { useState, useEffect } from 'react';
import EarlyAccessForm from './forms/EarlyAccessForm';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ showWaitlistButton = false }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
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

      {/* CTAs */}
      <div className="flex items-center space-x-4">
        {/* Waitlist Button - conditionally shown */}
        {showWaitlistButton && (
          <button
            onClick={() => setIsFormOpen(true)}
            className="text-md font-medium px-5 py-2 rounded-lg 
                     bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:opacity-90 transition
                     text-white tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-1
                     flex items-center justify-center"
          >
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1.5"
            >
              <path 
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                fill="white"
                className="drop-shadow-sm"
              />
            </svg>
            Get early access
          </button>
        )}
        
        {/* Discord Button */}
        <Link
          href="https://discord.gg/zYzwAjv9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md font-medium px-5 py-2 rounded-lg 
                     bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:opacity-90 transition
                     text-white tracking-wide shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Join Our Discord
        </Link>
      </div>
      {/* Early Access Form Modal */}
      <EarlyAccessForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </header>
  );
};

export default Header;

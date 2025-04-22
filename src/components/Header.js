import React, { useState, useEffect } from 'react';
import EarlyAccessForm from './forms/EarlyAccessForm';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ showWaitlistButton = false }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll event listener to change header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  return (
    <header className={`fixed top-0 left-0 right-0 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 backdrop-blur-xl ${
        scrolled ? 'bg-black/15 border-b border-white/10 shadow-md' : 'bg-black/5 border-b border-white/5 shadow-sm'
      } z-20 transition-all duration-300`}>
      {/* Logo SVG */}
      <div className="flex items-center mb-2 sm:mb-0">
        {/* Mobile Logo */}
        <div className="block sm:hidden">
          <Image
            src="/assets/logo.svg"
            alt="heynora.ai Logo"
            width={108}
            height={20}
            priority
            className="select-none w-auto h-auto max-w-none scale-100"
            style={{
              transformOrigin: 'left center'
            }}
          />
        </div>
        
        {/* Tablet-specific Logo (smaller) */}
        <div className="hidden sm:block md:hidden">
          <Image
            src="/assets/logo.svg"
            alt="heynora.ai Logo"
            width={60}
            height={11}
            priority
            className="select-none w-auto h-auto max-w-none scale-90"
            style={{
              transformOrigin: 'left center'
            }}
          />
        </div>
        
        {/* Desktop Logo */}
        <div className="hidden md:block">
          <Image
            src="/assets/logo.svg"
            alt="heynora.ai Logo"
            width={130}
            height={24}
            priority
            className="select-none w-auto h-auto max-w-none scale-110"
            style={{
              transformOrigin: 'left center'
            }}
          />
        </div>
      </div>

      {/* CTAs */}
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 w-full sm:w-auto justify-center sm:justify-end">
        {/* Waitlist Button - conditionally shown */}
        {showWaitlistButton && (
          <button
            onClick={() => setIsFormOpen(true)}
            className="text-xs sm:text-sm md:text-md font-medium px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full 
                     bg-white/10 backdrop-blur-md border border-white/10 
                     text-white tracking-wide shadow-md hover:shadow-lg transition-all duration-300 
                     flex items-center justify-center whitespace-nowrap relative overflow-hidden
                     active:shadow-inner group"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(236, 72, 153, 0.3) 0%, rgba(250, 204, 21, 0.3) 50%, transparent 80%)',
              borderRadius: '0 0 9999px 9999px'
            }}></div>
            <span className="relative z-10 flex items-center">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 hidden sm:block"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="white"
                  className="drop-shadow-sm"
                />
              </svg>
              Get early access
            </span>
          </button>
        )}
        
        {/* Discord Button */}
        <Link
          href="https://discord.gg/njR8mdUmK9"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm md:text-md font-medium px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full 
                     bg-white/10 backdrop-blur-md border border-white/10 
                     text-white tracking-wide shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap relative overflow-hidden
                     active:shadow-inner group"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: 'radial-gradient(ellipse at center bottom, rgba(236, 72, 153, 0.3) 0%, rgba(250, 204, 21, 0.3) 50%, transparent 80%)',
              borderRadius: '0 0 9999px 9999px'
            }}></div>
          <span className="relative z-10">Join Our Discord</span>
        </Link>
      </div>
      {/* Early Access Form Modal */}
      <EarlyAccessForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </header>
  );
};

export default Header;

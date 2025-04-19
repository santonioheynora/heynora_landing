import React from 'react';

const NoraBubble = () => {
  return (
    <svg width="340" height="100" viewBox="-9 0 349 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{overflow: 'visible'}}>
      <defs>
        <linearGradient id="noraBubbleGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
      </defs>
      <path d="M11 0H331C342.046 0 351 8.95431 351 20V80C351 91.0457 342.046 100 331 100H11C-0.0457 100 -9 91.0457 -9 80V20C-9 8.95431 -0.0457 0 11 0Z" fill="url(#noraBubbleGradient)"/>
      <foreignObject x="-9" y="10" width="349" height="80">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontFamily: 'Quicksand', fontSize: '15px', color: '#1A1A1A', lineHeight: 1.3, padding: 0, transform: 'translateX(7px)'}}>

          I've listened to your mix and here are some of my observations. You may want to consider adjusting the kick drum. I would suggest using a 909 kick. Do you want me to help you add one?
        </div>
      </foreignObject>
    </svg>
  );
};

export default NoraBubble;

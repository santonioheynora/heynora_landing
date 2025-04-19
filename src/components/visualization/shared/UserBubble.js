import React from 'react';

const UserBubble = () => {
  return (
    <svg width="280" height="40" viewBox="0 0 280 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="userBubbleGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4DFFB3" />
          <stop offset="100%" stopColor="#4698FF" />
        </linearGradient>
      </defs>
      <path d="M20 0H260C271.046 0 280 8.95431 280 20C280 31.0457 271.046 40 260 40H20C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0Z" fill="url(#userBubbleGradient)"/>
      <foreignObject x="10" y="8" width="260" height="24">
        <div xmlns="http://www.w3.org/1999/xhtml" style={{fontFamily: 'Quicksand', fontSize: '17px', color: '#1A1A1A', textAlign: 'center', lineHeight: 1.4}}>
          How can I improve my mix?
        </div>
      </foreignObject>
    </svg>
  );
};

export default UserBubble;

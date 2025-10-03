import React from 'react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0L40 20L20 40L0 20L20 0Z" fill="url(#logo-gradient)" />
    <defs>
      <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#6b7280" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
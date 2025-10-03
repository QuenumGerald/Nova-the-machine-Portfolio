import React from 'react';

const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 30%),' +
            'radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 30%)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: 'linear-gradient(to right, #0a0a0a 1px, transparent 1px), linear-gradient(to bottom, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default GridBackground;
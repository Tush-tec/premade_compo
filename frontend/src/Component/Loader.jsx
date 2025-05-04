import React from 'react';

const Loader = ({ size = 24, color = 'text-blue-500', className = '' }) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color} ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Loader;

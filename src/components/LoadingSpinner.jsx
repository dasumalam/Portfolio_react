import React from 'react';

const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center space-x-3">
      <div className={`${sizeClasses[size]} border-2 border-white/20 border-t-white rounded-full animate-spin`}></div>
      {text && <span className="text-white/80 animate-pulse">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;

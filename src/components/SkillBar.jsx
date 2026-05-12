import React from 'react';

const SkillBar = ({ skill, level, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500'
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div 
          className={`${colorClasses[color]} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;

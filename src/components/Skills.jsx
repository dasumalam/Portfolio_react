import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skills = {
    frontend: [
      { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-400' },
      { name: 'HTML5', icon: 'fab fa-html5', color: 'text-orange-500' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
      { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400' },
      { name: 'jQuery', icon: 'fas fa-code', color: 'text-blue-700' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind', color: 'text-cyan-400' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: 'text-purple-600' }
    ],
    design: [
      { name: 'Figma', icon: 'fab fa-figma', color: 'text-purple-500' },
      { name: 'Photoshop', icon: 'fas fa-image', color: 'text-blue-600' },
      { name: 'Adobe XD', icon: 'fas fa-pen-ruler', color: 'text-pink-500' },
      { name: 'Affinity Designer', icon: 'fas fa-diamond', color: 'text-purple-400' }
    ],
    tools: [
      { name: 'Git', icon: 'fab fa-git-alt', color: 'text-orange-600' },
      { name: 'GitHub', icon: 'fab fa-github', color: 'text-gray-100' },
      { name: 'VS Code', icon: 'fas fa-code', color: 'text-blue-400' },
      { name: 'SASS', icon: 'fab fa-sass', color: 'text-pink-400' },
      { name: 'SCSS', icon: 'fab fa-sass', color: 'text-pink-500' },
      { name: 'LESS', icon: 'fas fa-less', color: 'text-blue-800' },
      { name: 'WordPress', icon: 'fab fa-wordpress', color: 'text-blue-500' }
    ]
  };

  const getAllSkills = () => {
    return [...skills.frontend, ...skills.design, ...skills.tools];
  };

  const getFilteredSkills = () => {
    if (activeCategory === 'all') return getAllSkills();
    return skills[activeCategory] || [];
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Animated Background matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-gray-900/40 to-slate-800/30 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-6 md:px-8">My Skills</h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">Technologies I've mastered and my proficiency levels</p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-4">
          <div className="bg-white/5 rounded-full p-1 border border-white/20 flex justify-center gap-1 sm:gap-2 md:gap-3 overflow-x-auto max-w-full">
            {['all', 'frontend', 'design', 'tools'].map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-1.5 md:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                  activeCategory === category
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {category === 'all' ? 'All Skills' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Skills Grid - Infinite Carousel for All Devices */}
        <div className="overflow-hidden pb-4">
          <div className="flex gap-4 px-4 animate-infinite-scroll">
            {/* Duplicate skills for infinite loop - show each skill twice */}
            {[...getFilteredSkills(), ...getFilteredSkills()].map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 p-3 sm:p-4 rounded-xl"
              >
                {/* Icon with dark background */}
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-800 mb-2 sm:mb-3">
                  <i className={`${skill.icon} ${skill.color} text-lg sm:text-xl md:text-2xl transition-all duration-300 ease-in-out group-hover:scale-110`}></i>
                </div>
                
                {/* Skill Name */}
                <span className="text-white font-medium text-xs sm:text-sm text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row - Only show if we have enough skills for two rows */}
        {getFilteredSkills().length > 8 && (
          <div className="overflow-hidden pb-4 mt-2">
            <div className="flex gap-4 px-4 animate-infinite-scroll-reverse">
              {/* Split skills between two rows - first half in first row, second half in second row */}
              {[...getFilteredSkills().slice(Math.floor(getFilteredSkills().length / 2)), ...getFilteredSkills().slice(Math.floor(getFilteredSkills().length / 2))].map((skill, index) => (
                <div 
                  key={`${skill.name}-row2-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 p-3 sm:p-4 rounded-xl"
                >
                  {/* Icon with dark background */}
                  <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-800 mb-2 sm:mb-3">
                    <i className={`${skill.icon} ${skill.color} text-lg sm:text-xl md:text-2xl transition-all duration-300 ease-in-out group-hover:scale-110`}></i>
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-white font-medium text-xs sm:text-sm text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 sm:w-40 h-24 sm:h-40 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-60 h-32 sm:h-60 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

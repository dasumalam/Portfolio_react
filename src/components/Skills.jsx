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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">My Skills</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-base text-gray-400 max-w-3xl mx-auto">Technologies I've mastered and my proficiency levels</p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 rounded-full p-1 border border-white/20">
            {['all', 'frontend', 'design', 'tools'].map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
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
        
        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-x-1 gap-y-10">
          {getFilteredSkills().map((skill, index) => (
            <div 
              key={skill.name}
              className="group flex flex-col items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-103 hover:-translate-y-0.5 animate-slide-up"
              style={{
                animationDelay: `${index * 0.08}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Icon with dark background */}
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-2">
                <i className={`${skill.icon} ${skill.color} text-2xl transition-all duration-300 ease-in-out group-hover:scale-110`}></i>
              </div>
              
              {/* Skill Name */}
              <span className="text-white font-medium text-sm text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

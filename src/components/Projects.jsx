import React from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../constants/projects';

const Projects = ({ activeCategory, onProjectFilter, openGallery }) => {
  const filteredProjects = PROJECTS.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore my latest work in web development and design. Each project showcases different skills and technologies.
          </p>
        </div>
        
        {/* Project Categories Tabs */}
        <div className="flex justify-center mb-12 px-2 sm:px-4">
          <div className="bg-white/5 rounded-full p-1 border border-white/20 flex justify-center gap-1 sm:gap-2">
            {PROJECT_CATEGORIES.map(category => (
              <button 
                key={category.id}
                onClick={() => onProjectFilter(category.id)}
                className={`project-tab px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'text-white bg-white/10' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-2 sm:px-4">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
              data-category={project.category}
            >
              <div className="bg-white/5 rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="relative overflow-hidden">
                  {project.gallery ? (
                    <div 
                      onClick={() => openGallery(project.gallery)}
                      className="cursor-pointer relative"
                    >
                      <img src={project.image} alt={project.title} className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white text-center">
                          <i className="fas fa-images text-2xl mb-2"></i>
                          <p className="text-sm">View Gallery ({project.gallery.length} images)</p>
                        </div>
                      </div>
                    </div>
                  ) : project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <img src={project.image} alt={project.title} className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  ) : (
                    <img src={project.image} alt={project.title} className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-110" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-white/25 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                                  </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white flex-1">{project.title}</h4>
                    <span className="bg-white/25 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium ml-2">
                      {project.category === 'web' ? 'Web' : 'Design'}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3 leading-relaxed text-sm line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {project.gallery && (
                        <button 
                          onClick={() => openGallery(project.gallery)}
                          className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 px-3 py-1.5 rounded-lg transition-all duration-300 font-medium text-sm border border-blue-500/30"
                        >
                          <i className="fas fa-images mr-1"></i>
                          Gallery
                        </button>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white p-2 rounded-lg transition-all duration-300"
                          title="View on GitHub"
                        >
                          <i className="fab fa-github text-sm"></i>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-transparent hover:bg-purple-500/10 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm border border-purple-500/30 hover:border-purple-500/50 flex items-center"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

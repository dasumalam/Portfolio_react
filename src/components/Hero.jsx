import React from 'react';
import resumePDF from '../assets/Darshnamalam.pdf';

const Hero = ({ heroTitleRef, onNavClick }) => {
  return (
    <section id="home" className="min-h-[80vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden py-8 sm:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-gray-900/40 to-slate-800/30 animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-8 sm:top-20 left-4 sm:left-10 text-blue-400/30 animate-float">
        <i className="fas fa-code text-xl sm:text-3xl md:text-4xl"></i>
      </div>
      <div className="absolute top-16 sm:top-40 right-4 sm:right-20 text-purple-400/30 animate-float" style={{animationDelay: '1s'}}>
        <i className="fas fa-palette text-lg sm:text-2xl md:text-3xl"></i>
      </div>
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-20 text-pink-400/30 animate-float" style={{animationDelay: '2s'}}>
        <i className="fas fa-laptop-code text-lg sm:text-2xl md:text-3xl"></i>
      </div>
      <div className="absolute bottom-24 sm:bottom-40 right-4 sm:right-10 text-green-400/30 animate-float" style={{animationDelay: '3s'}}>
        <i className="fas fa-mobile-alt text-base sm:text-xl md:text-2xl"></i>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
                    
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight px-4 sm:px-6 md:px-8">
            <span ref={heroTitleRef} className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Hi, I'm Darshna
            </span>
          </h1>
          
          {/* Role */}
          <div className="mb-6 sm:mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
              Web Developer & 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> UI/UX Designer</span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Passionate about creating beautiful, functional, and user-friendly web experiences that make a difference
          </p>
          
          {/* CTA Buttons — same horizontal pill layout on mobile + desktop */}
          <div
            className="flex flex-row flex-nowrap justify-center items-center gap-2.5 sm:gap-6 animate-slide-up px-2 sm:px-4 max-w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/50 hover:border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
            >
              <i className="fas fa-download text-xs sm:text-base shrink-0 group-hover:animate-bounce"></i>
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => onNavClick(e, '#projects')}
              className="group border border-white/50 hover:border-white text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-base font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
            >
              <i className="fas fa-briefcase text-xs sm:text-base shrink-0 group-hover:rotate-12 transition-transform duration-300"></i>
              View My Work
            </a>
          </div>
          
                  </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/50 text-xl sm:text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;

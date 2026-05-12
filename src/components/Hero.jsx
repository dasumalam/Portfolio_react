import React from 'react';
import resumePDF from '../assets/Darshna_Malam .pdf';

const Hero = ({ heroTitleRef, onNavClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-blue-400/30 animate-float">
        <i className="fas fa-code text-4xl"></i>
      </div>
      <div className="absolute top-40 right-20 text-purple-400/30 animate-float" style={{animationDelay: '1s'}}>
        <i className="fas fa-palette text-3xl"></i>
      </div>
      <div className="absolute bottom-20 left-20 text-pink-400/30 animate-float" style={{animationDelay: '2s'}}>
        <i className="fas fa-laptop-code text-3xl"></i>
      </div>
      <div className="absolute bottom-40 right-10 text-green-400/30 animate-float" style={{animationDelay: '3s'}}>
        <i className="fas fa-mobile-alt text-2xl"></i>
      </div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
                    
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            <span ref={heroTitleRef} className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Hi, I'm Darshna
            </span>
          </h1>
          
          {/* Role */}
          <div className="mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
              Web Developer & 
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"> UI/UX Designer</span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{animationDelay: '0.4s'}}>
            Passionate about creating beautiful, functional, and user-friendly web experiences that make a difference
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a href={resumePDF} target="_blank" 
               className="group border border-white/50 hover:border-white text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <i className="fas fa-download mr-2 group-hover:animate-bounce"></i>
              Download Resume
            </a>
            <a href="#projects" onClick={(e) => onNavClick(e, '#projects')}
               className="group border border-white/50 hover:border-white text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <i className="fas fa-briefcase mr-2 group-hover:rotate-12 transition-transform duration-300"></i>
              View My Work
            </a>
          </div>
          
                  </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white/50 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;

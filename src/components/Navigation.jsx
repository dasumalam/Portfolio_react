import React from 'react';

const Navigation = ({ scrolled, mobileMenuOpen, onMobileMenuToggle, onNavClick }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/20 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white">
            <i className="fas fa-code"></i>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="nav-link hover:text-gray-300 transition-colors duration-300">Home</a>
            <a href="#about" onClick={(e) => onNavClick(e, '#about')} className="nav-link hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="#skills" onClick={(e) => onNavClick(e, '#skills')} className="nav-link hover:text-gray-300 transition-colors duration-300">Skills</a>
            <a href="#projects" onClick={(e) => onNavClick(e, '#projects')} className="nav-link hover:text-gray-300 transition-colors duration-300">Projects</a>
            <a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="nav-link hover:text-gray-300 transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={onMobileMenuToggle}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md border-t border-white/20 transition-all duration-300 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-6 space-y-4">
          <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="block nav-link hover:text-gray-300 transition-colors duration-300">Home</a>
          <a href="#about" onClick={(e) => onNavClick(e, '#about')} className="block nav-link hover:text-gray-300 transition-colors duration-300">About</a>
          <a href="#skills" onClick={(e) => onNavClick(e, '#skills')} className="block nav-link hover:text-gray-300 transition-colors duration-300">Skills</a>
          <a href="#projects" onClick={(e) => onNavClick(e, '#projects')} className="block nav-link hover:text-gray-300 transition-colors duration-300">Projects</a>
          <a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="block nav-link hover:text-gray-300 transition-colors duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

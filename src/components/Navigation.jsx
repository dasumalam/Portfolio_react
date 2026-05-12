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
            className="md:hidden text-white hover:text-gray-300 transition-all duration-300 p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl w-6 h-6 flex items-center justify-center`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden absolute right-4 top-16 w-40 bg-slate-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 transition-all duration-300 origin-top ${mobileMenuOpen ? 'block opacity-100 scale-y-100' : 'hidden opacity-0 scale-y-95'}`} style={{ backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)' }}>
        <div className="py-2">
          <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300 font-medium">Home</a>
          <a href="#about" onClick={(e) => onNavClick(e, '#about')} className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300 font-medium">About</a>
          <a href="#skills" onClick={(e) => onNavClick(e, '#skills')} className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300 font-medium">Skills</a>
          <a href="#projects" onClick={(e) => onNavClick(e, '#projects')} className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300 font-medium">Projects</a>
          <a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="block px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300 font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

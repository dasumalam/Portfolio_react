import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Darshna Malam
              </h3>
              <div className="w-12 sm:w-16 h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Web Developer & UI/UX Designer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://github.com/dasumalam" target="_blank" rel="noopener noreferrer" 
                 className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                <i className="fab fa-github text-gray-400 group-hover:text-white text-sm sm:text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/darshna-malam?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" 
                 className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                <i className="fab fa-linkedin-in text-gray-400 group-hover:text-white text-sm sm:text-lg"></i>
              </a>
                          </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Quick Links</h4>
              <div className="w-8 sm:w-12 h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#home" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-home w-4 sm:w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                  <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-user w-4 sm:w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                  <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-code w-4 sm:w-5 text-green-400 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                  <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-briefcase w-4 sm:w-5 text-orange-400 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                  <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-envelope w-4 sm:w-5 text-red-400 group-hover:scale-110 transition-transform duration-300 text-sm sm:text-base"></i>
                  <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 text-sm sm:text-base">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Contact Info</h4>
              <div className="w-8 sm:w-12 h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <i className="fas fa-envelope text-blue-400 text-sm sm:text-base"></i>
                </div>
                <div>
                  <span className="text-gray-300 block text-sm sm:text-base">darshnamalam22@gmail.com</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Email</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-300">
                  <i className="fas fa-phone text-green-400 text-sm sm:text-base"></i>
                </div>
                <div>
                  <span className="text-gray-300 block text-sm sm:text-base">+91 7265925674</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Phone</span>
                </div>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4 group">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-red-400 text-sm sm:text-base"></i>
                </div>
                <div>
                  <span className="text-gray-300 block text-sm sm:text-base">Junagadh, Gujarat, India</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

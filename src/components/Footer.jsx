import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-white/10 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Darshna Malam
              </h3>
              <div className="w-16 h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Web Developer & UI/UX Designer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/dasumalam" target="_blank" rel="noopener noreferrer" 
                 className="group w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                <i className="fab fa-github text-gray-400 group-hover:text-white text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/darshna-malam?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" 
                 className="group w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20">
                <i className="fab fa-linkedin-in text-gray-400 group-hover:text-white text-lg"></i>
              </a>
                          </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
              <div className="w-12 h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-home w-5 text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-user w-5 text-purple-400 group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-code w-5 text-green-400 group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-briefcase w-5 text-orange-400 group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group">
                  <i className="fas fa-envelope w-5 text-red-400 group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">Contact Info</h4>
              <div className="w-12 h-0.5 bg-white/30 rounded-full"></div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <i className="fas fa-envelope text-blue-400"></i>
                </div>
                <div>
                  <span className="text-gray-300 block">darshnamalam22@gmail.com</span>
                  <span className="text-gray-500 text-sm">Email</span>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-300">
                  <i className="fas fa-phone text-green-400"></i>
                </div>
                <div>
                  <span className="text-gray-300 block">+91 7265925674</span>
                  <span className="text-gray-500 text-sm">Phone</span>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors duration-300">
                  <i className="fas fa-map-marker-alt text-red-400"></i>
                </div>
                <div>
                  <span className="text-gray-300 block">Junagadh, Gujarat, India</span>
                  <span className="text-gray-500 text-sm">Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Darshna Malam. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-all duration-300 hover:text-purple-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-6 md:px-8">
            Get In Touch
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out!
          </p>
        </div>

        <div className="mt-14 sm:mt-20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Professional
              </h3>
              <div className="w-12 sm:w-16 h-0.5 bg-white/30 rounded-full mb-4" />

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Web Developer & UI/UX Designer passionate about creating beautiful and functional digital experiences.
              </p>

              <div className="mt-5 flex space-x-3 sm:space-x-4">
                <a href="https://github.com/dasumalam" target="_blank" rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <i className="fab fa-github text-gray-400 group-hover:text-white text-sm sm:text-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/darshna-malam?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <i className="fab fa-linkedin-in text-gray-400 group-hover:text-white text-sm sm:text-lg"></i>
                </a>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">Contact Info</h4>
              <div className="w-8 sm:w-12 h-0.5 bg-white/30 rounded-full mb-5" />

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
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import nsdcCertificate from '../assets/nsdc_certificate_54320.pdf';
import topsCertificate from '../assets/tops_certificate_98055.pdf';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-4 sm:px-6 md:px-8">
            <span className="text-white">
              About Me
            </span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Passionate web developer & UI/UX designer crafting digital experiences with modern technologies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                <i className="fas fa-quote-left text-blue-400 mr-2 sm:mr-3 text-sm sm:text-base md:text-lg"></i>
                Professional Summary
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                Results-driven web developer and UI/UX designer with comprehensive expertise in modern web technologies. 
                Currently advancing my skills through specialized UX/UI training at TOPS Technology, Rajkot. 
                I combine creative design thinking with robust technical implementation to deliver exceptional digital solutions 
                that enhance user experience and drive business objectives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center">
                <i className="fas fa-briefcase text-blue-400 mr-2 sm:mr-3 text-sm sm:text-base md:text-lg"></i>
                Professional Experience
              </h3>
              
              <div className="border-l-4 border-gray-300 pl-3 sm:pl-4 p-3 sm:p-4 rounded-r-xl mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                    <i className="fas fa-code text-white text-xs sm:text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">Web Design</h4>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed mb-3 text-xs sm:text-sm">
                  Skilled in developing modern, responsive websites using HTML5, CSS3, and JavaScript technologies. 
                  Experienced in creating user-friendly interfaces with React.js framework, emphasizing 
                  clean design principles and optimal user experience.
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="bg-gray-700/30 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-gray-600/40">HTML5</span>
                  <span className="bg-gray-700/30 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-gray-600/40">CSS3</span>
                  <span className="bg-gray-700/30 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-gray-600/40">JavaScript</span>
                  <span className="bg-gray-700/30 text-gray-200 px-2 py-1 rounded-full text-xs font-medium border border-gray-600/40">React.js</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-graduation-cap text-purple-400 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                  Education
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Bachelor of Computer Application</p>
                    <p className="text-gray-400 text-xs sm:text-sm">2021 - 2024</p>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">Specialized in Web Development & Design</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-certificate text-green-400 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                  Certifications
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">NSDC Certification</p>
                    <p className="text-gray-400 text-xs sm:text-sm">National Skill Development Corporation</p>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Completed</span>
                    </div>
                    <a href={nsdcCertificate} target="_blank" 
                       className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors">
                      <i className="fas fa-external-link-alt mr-1"></i>
                      View Certificate
                    </a>
                  </div>
                  <div className="border-t border-white/10 pt-2 sm:pt-3">
                    <p className="text-white font-semibold text-sm sm:text-base">Web Designing</p>
                    <p className="text-gray-400 text-xs sm:text-sm">TOPS Technology, Rajkot</p>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Completed</span>
                    </div>
                    <a href={topsCertificate} target="_blank" 
                       className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 text-xs sm:text-sm transition-colors">
                      <i className="fas fa-external-link-alt mr-1"></i>
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center">
                  <i className="fas fa-star text-yellow-400 mr-2 sm:mr-3 text-sm sm:text-base"></i>
                  Professional Attributes
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {['Problem Solver', 'Fast Learner', 'Team Player', 'Creative Thinker', 'Time Management'].map((skill, index) => (
                    <div key={index} className="group flex items-center p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:translate-x-1">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mr-2 sm:mr-3 group-hover:animate-pulse"></div>
                      <span className="text-white text-xs sm:text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;

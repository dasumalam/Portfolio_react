import React from 'react';
import heroImage from '../assets/hero.png';
import nsdcCertificate from '../assets/nsdc_certificate_54320.pdf';
import topsCertificate from '../assets/tops_certificate_98055.pdf';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-black to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-white">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate web developer & UI/UX designer crafting digital experiences with modern technologies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
           

            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-quote-left text-blue-400 mr-3"></i>
                Professional Summary
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Results-driven web developer and UI/UX designer with comprehensive expertise in modern web technologies. 
                Currently advancing my skills through specialized UX/UI training at TOPS Technology, Rajkot. 
                I combine creative design thinking with robust technical implementation to deliver exceptional digital solutions 
                that enhance user experience and drive business objectives.
              </p>
            </div>


             <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <i className="fas fa-briefcase text-blue-400 mr-3"></i>
                Professional Experience
              </h3>
              
              <div className="border-l-4 border-gray-300 pl-4 p-4 rounded-r-xl mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                    <i className="fas fa-code text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base">Web Design</h4>
                  </div>
                </div>
                <p className="text-gray-200 leading-relaxed mb-3 text-sm">
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

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-graduation-cap text-purple-400 mr-3"></i>
                  Education
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-semibold">Bachelor of Computer Application</p>
                    <p className="text-gray-400 text-sm">2021 - 2024</p>
                    <p className="text-gray-300 text-sm mt-1">Specialized in Web Development & Design</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-certificate text-green-400 mr-3"></i>
                  Certifications
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-white font-semibold">NSDC Certification</p>
                    <p className="text-gray-400 text-sm">National Skill Development Corporation</p>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Completed</span>
                    </div>
                    <a href={nsdcCertificate} target="_blank" 
                       className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                      <i className="fas fa-external-link-alt mr-1"></i>
                      View Certificate
                    </a>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <p className="text-white font-semibold">Web Designing</p>
                    <p className="text-gray-400 text-sm">TOPS Technology, Rajkot</p>
                    <div className="flex items-center mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 text-xs font-medium">Completed</span>
                    </div>
                    <a href={topsCertificate} target="_blank" 
                       className="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
                      <i className="fas fa-external-link-alt mr-1"></i>
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-star text-yellow-400 mr-3"></i>
                Professional Attributes
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Detail Oriented', 'Fast Learner', 'Team Player', 'Creative Thinker', 'Time Management'].map((skill, index) => (
                  <span key={index} className="bg-gradient-to-r from-white/10 to-white/5 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

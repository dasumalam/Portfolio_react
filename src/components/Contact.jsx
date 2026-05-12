import React, { useState } from 'react';
import { messageStorage } from '../utils/messageStorage';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Save message to local storage
      const saved = messageStorage.saveMessage(formData);
      
      if (saved) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Try to open email client (optional)
        setTimeout(() => {
          const subject = encodeURIComponent(formData.subject);
          const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          );
          window.location.href = `mailto:darshnamalam22@gmail.com?subject=${subject}&body=${body}`;
        }, 1000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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
        
        <div className="max-w-lg mx-auto">
          <div className="grid md:grid-cols-1 gap-8">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="bg-white/5 p-4 sm:p-6 md:p-8 rounded-2xl border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="group">
                      <label htmlFor="name" className="block text-white mb-2 font-medium transition-colors group-focus-within:text-blue-400 text-sm sm:text-base">
                        <i className="fas fa-user mr-2 text-gray-400 text-sm sm:text-base"></i>Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 transform focus:scale-[1.02] text-sm sm:text-base"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-white mb-2 font-medium transition-colors group-focus-within:text-blue-400 text-sm sm:text-base">
                        <i className="fas fa-envelope mr-2 text-gray-400 text-sm sm:text-base"></i>Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 transform focus:scale-[1.02] text-sm sm:text-base"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-white mb-2 font-medium transition-colors group-focus-within:text-blue-400 text-sm sm:text-base">
                      <i className="fas fa-tag mr-2 text-gray-400 text-sm sm:text-base"></i>Subject
                    </label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 transform focus:scale-[1.02] text-sm sm:text-base"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-white mb-2 font-medium transition-colors group-focus-within:text-blue-400 text-sm sm:text-base">
                      <i className="fas fa-message mr-2 text-gray-400 text-sm sm:text-base"></i>Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/10 transition-all duration-300 transform focus:scale-[1.02] resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                  </div>
                  
                  {/* Status Messages */}
                  <div className={`transition-all duration-500 ${submitStatus ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    {submitStatus === 'success' && (
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 text-green-400 px-4 sm:px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center animate-pulse">
                        <i className="fas fa-check-circle mr-2 sm:mr-3 text-lg sm:text-xl"></i>
                        <div className="text-center">
                          <p className="font-medium text-sm sm:text-base lg:text-lg">Message sent successfully!</p>
                          <p className="text-xs sm:text-sm text-green-300 mt-1">Thank you for contacting me. I'll get back to you soon.</p>
                          <p className="text-xs sm:text-sm text-green-200 mt-2">Email: darshnamalam22@gmail.com</p>
                        </div>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-500/50 text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-center">
                        <i className="fas fa-exclamation-circle mr-2 sm:mr-3 text-sm sm:text-lg"></i>
                        <div>
                          <p className="font-medium text-xs sm:text-sm">Failed to send message</p>
                          <p className="text-xs text-red-300">Please check your connection and try again.</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {!submitStatus && (
                    <div className="flex justify-center">
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative overflow-hidden group px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 w-fit text-sm sm:text-base ${
                          isSubmitting 
                            ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-gray-200 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-100 hover:to-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-all duration-500 ${
                        isSubmitting ? 'translate-x-0' : 'translate-x-full'
                      }`}></div>
                      <span className="relative flex items-center justify-center">
                        <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} mr-1 sm:mr-2 text-xs sm:text-sm`}></i>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </span>
                    </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

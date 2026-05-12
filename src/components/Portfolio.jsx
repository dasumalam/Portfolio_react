import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Gallery from './Gallery';
import { 
  useScrollEffect, 
  usePageLoad, 
  useMobileMenu, 
  useProjectFilter, 
  useGallery, 
  useFontAwesome 
} from '../hooks/usePortfolioAnimations';

const Portfolio = () => {
  // Initialize Font Awesome
  useFontAwesome();

  // Custom hooks
  const scrolled = useScrollEffect();
  const { loaded, heroTitleRef } = usePageLoad();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();
  const { activeCategory, handleProjectFilter } = useProjectFilter();
  const { 
    selectedGallery, 
    currentImageIndex, 
    openGallery, 
    closeGallery, 
    nextImage, 
    prevImage 
  } = useGallery();

  // Smooth scrolling for navigation links
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu if open
    closeMobileMenu();
  };

  return (
    <div className={`min-h-screen bg-black text-white overflow-x-hidden scroll-smooth ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Navigation */}
      <Navigation 
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuToggle={toggleMobileMenu}
        onNavClick={handleNavClick}
      />

      {/* Hero Section */}
      <Hero 
        heroTitleRef={heroTitleRef}
        onNavClick={handleNavClick}
      />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects 
        activeCategory={activeCategory}
        onProjectFilter={handleProjectFilter}
        openGallery={openGallery}
      />

      {/* Contact Section */}
      <Contact />

      {/* Gallery Modal */}
      <Gallery 
        selectedGallery={selectedGallery}
        currentImageIndex={currentImageIndex}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
};

export default Portfolio;

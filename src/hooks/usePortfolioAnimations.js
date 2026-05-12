import { useState, useEffect, useRef } from 'react';

export const useScrollEffect = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Parallax effect for floating elements
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.animate-float');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrolled;
};

export const usePageLoad = () => {
  const [loaded, setLoaded] = useState(false);
  const heroTitleRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
    
    // Animate elements on page load
    const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });

    // Initialize typing effect only once
    if (heroTitleRef.current && !heroTitleRef.current.dataset.typed) {
      const originalText = heroTitleRef.current.textContent;
      heroTitleRef.current.dataset.typed = 'true';
      setTimeout(() => {
        typeWriter(heroTitleRef.current, originalText, 150);
      }, 1000);
    }

    // Setup intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    type();
  };

  return { loaded, heroTitleRef };
};

export const useMobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return { mobileMenuOpen, toggleMobileMenu, closeMobileMenu };
};

export const useProjectFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleProjectFilter = (category) => {
    setActiveCategory(category);
  };

  return { activeCategory, handleProjectFilter };
};

export const useGallery = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (gallery, index = 0) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery && currentImageIndex < selectedGallery.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedGallery && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return {
    selectedGallery,
    currentImageIndex,
    openGallery,
    closeGallery,
    nextImage,
    prevImage
  };
};

export const useFontAwesome = () => {
  useEffect(() => {
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);

    return () => {
      if (document.head.contains(fontAwesomeLink)) {
        document.head.removeChild(fontAwesomeLink);
      }
    };
  }, []);
};

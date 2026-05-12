import React, { useEffect } from 'react';

const Gallery = ({ selectedGallery, currentImageIndex, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (selectedGallery) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedGallery, onClose, onNext, onPrev]);

  if (!selectedGallery) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
      >
        <i className="fas fa-times text-2xl"></i>
      </button>
      
      <button 
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentImageIndex === 0}
      >
        <i className="fas fa-chevron-left text-2xl"></i>
      </button>
      
      <button 
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={currentImageIndex === selectedGallery.length - 1}
      >
        <i className="fas fa-chevron-right text-2xl"></i>
      </button>
      
      <div className="max-w-6xl max-h-[90vh] mx-4">
        <img 
          src={selectedGallery[currentImageIndex]} 
          alt={`Gallery image ${currentImageIndex + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        
        <div className="text-center mt-4">
          <p className="text-white text-sm">
            Image {currentImageIndex + 1} of {selectedGallery.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React, { useState } from 'react';
import arrowBackImage from '../images/arrow_back.svg';
import arrowForwardImage from '../images/arrow_forward.svg';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

// Condition pour ne pas afficher les flèches et la numérotation
  if (pictures.length === 1) {
    return (
      <div className="carousel">
        <div className="carousel-content">
          <img src={pictures[currentIndex]} alt={`Logement ${currentIndex + 1}`} />
        </div>
      </div>
    );
  }

  return (
    <div className="carousel">
      <button className="arrow_left" onClick={prevSlide}>
        <img src={arrowBackImage} alt="Arrow Back" />
      </button>
      <div className="carousel-content">
        <img src={pictures[currentIndex]} alt={`Logement ${currentIndex + 1}`} />
        <div className="photo-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      </div>
      <button className="arrow_right" onClick={nextSlide}>
        <img src={arrowForwardImage} alt="Arrow Forward" />
      </button>
    </div>
  );
};

export default Carousel;

import React, { useState } from 'react';
import './PhotoSlider.css';

const photos = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  // Add more photo URLs as needed
];

function PhotoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === photos.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="photo-slider">
      <div className="slide-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {photos.map((photo, index) => (
          <div className="slide" key={index}>
            <img src={photo} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoSlider;

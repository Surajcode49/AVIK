import React, { useState } from 'react';
// import './MultiImageSlider.scss';

// const images = [
//     { id: 1, filename: 'image1.jpg', path: require('../Assets/banner--1.jpg').default },
//     { id: 2, filename: 'image2.jpg', path: require('../Assets/banner--2.jpg').default },
//     { id: 3, filename: 'image3.jpg', path: require('../Assets/banner--3.jpg').default },
//   ];
const images = [
    { id: 1, filename: 'image1.jpg', path: require('../Assets/banner--1.jpg').default },
    { id: 2, filename: 'image2.jpg', path: require('../Assets/banner--2.jpg').default },
    { id: 3, filename: 'image3.jpg', path: require('../Assets/banner--3.jpg').default },
  ];

const MultiImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleInputChange = (event) => {
    setCurrentIndex(parseInt(event.target.value, 10));
  };

  return (
    <div className="multi-image-slider">
      <input
        type="range"
        min="0"
        max={images.length - 1}
        value={currentIndex}
        onChange={handleInputChange}
        className="slider"
      />
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={require(`../assets/${image}`).default} // Path to your images
            alt={`image-${index}`}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiImageSlider;

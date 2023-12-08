
import React, { useState, useEffect } from 'react';
// import './Slider.scss';
import Banner1 from '../Assets/banner--1.jpg';
import Banner2 from '../Assets/banner--2.jpg';
import Banner3 from '../Assets/banner--3.jpg';
import Banner4 from '../Assets/banner--4.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { imagePath: Banner1, alt: '' },
    { imagePath: Banner2, alt: '' },
    { imagePath: Banner3, alt: '' },
    { imagePath: Banner4, alt: '' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider" style={{ padding: "10px" }}>
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide" style={{ backgroundImage: `url(${slide.imagePath})` }} />
        ))}
      </div>
    </div>
  );
};

export default Slider;

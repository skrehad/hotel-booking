import React, { useEffect, useState } from "react";
import "./SliderComponent.css";

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://i.ibb.co/g6XdNWf/h1-hero-jpg-2.webp",
    "https://i.ibb.co/QnKC7dM/h1-hero-jpg-1.webp",
    "https://i.ibb.co/s35hNJR/h1-hero-jpg-3.webp",
    "https://i.ibb.co/W0STKFv/bg-1-jpg.webp",
  ];

  const texts = [
    "ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!",
    "Find Your Next Tour!",
    "Rest Journey in Single step, in the breathtaking",
    "Top Hotel in the World",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <div className="carousel h-[600px]">
        {/* <div className="carousel"> */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="carousel-text text-center">
              <p className="uppercase drop-shadow-2xl  mx-10 lg:mx-0 md:mx-0 lg:text-5xl text-2xl md:text-5xl font-serif">
                {texts[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;

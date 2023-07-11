import React, { useEffect, useState } from "react";
import "./GalleryPictureSlider.css";

const GalleryPictureSlider = () => {
  const images = [
    "https://i.ibb.co/y5V1Bf2/gallery-4-jpg.webp",
    "https://i.ibb.co/W2GThcp/gallery-3-jpg.webp",
    "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
    "https://i.ibb.co/kBjLdx8/gallery-1-jpg.webp",
    "https://i.ibb.co/y5V1Bf2/gallery-4-jpg.webp",
    "https://i.ibb.co/pKFCGh7/gallery-2-jpg.webp",
    "https://i.ibb.co/y6GQ4SF/1.jpg",
    "https://i.ibb.co/y6GQ4SF/1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showingPictures, setShowingPictures] = useState(images.slice(0, 4));

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      const nextPictures = images.slice(nextIndex, nextIndex + 4);
      setCurrentIndex(nextIndex);
      setShowingPictures(nextPictures);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, images]);

  return (
    <div>
      <h1 className="text-center text-[40px] font-normal text-black font-serif my-10">
        Gallery
      </h1>
      <div className="mx-10 grid my-10 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {showingPictures.map((picture, index) => (
          <img key={index} alt="" className="h-[280px] w-full" src={picture} />
        ))}
      </div>
    </div>
  );
};

export default GalleryPictureSlider;

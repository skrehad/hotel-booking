import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const GalleryPictureSlider = () => {
  const { isLoading, data: galleryPicture } = useQuery("galleryPicture", () =>
    fetch(
      "https://hotel-booking-backend-server-skrehad.vercel.app/gallery"
    ).then((res) => res.json())
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showingPictures, setShowingPictures] = useState([]);

  useEffect(() => {
    if (galleryPicture) {
      const timer = setInterval(() => {
        const nextIndex = (currentIndex + 1) % galleryPicture.length;
        const nextPictures = galleryPicture.slice(nextIndex, nextIndex + 4);
        setCurrentIndex(nextIndex);
        setShowingPictures(nextPictures);
      }, 2500);

      return () => clearInterval(timer);
    }
  }, [currentIndex, galleryPicture]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-center text-[40px] font-normal text-black font-serif my-10">
        Gallery
      </h1>
      <div className="mx-10 md:lg:mx-0 grid my-10 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {showingPictures.map((picture, index) => (
          <img
            key={index}
            alt=""
            className="h-[280px] w-full"
            src={picture.image}
          />
        ))}
      </div>
      <div>
        <h1 className="text-center text-xl font-normal text-black font-serif my-5">
          Only Admin Can Add Gallery Photo
        </h1>
      </div>
    </div>
  );
};

export default GalleryPictureSlider;

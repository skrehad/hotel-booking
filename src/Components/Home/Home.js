import React from "react";
import HomeFooter from "./HomeFooter/HomeFooter";
import GalleryPictureSlider from "./GalleryPictureSlider/GalleryPictureSlider";
import CardCarousel from "./CardCarousel/CardCarousel";

const Home = () => {
  return (
    <div>
      <div>home</div>
      <div className="lg:mx-20 md:mx-12 mx-10">
        <CardCarousel></CardCarousel>
      </div>
      <HomeFooter></HomeFooter>
      <GalleryPictureSlider></GalleryPictureSlider>
    </div>
  );
};

export default Home;

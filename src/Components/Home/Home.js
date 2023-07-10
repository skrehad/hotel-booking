import React from "react";
import HomeFooter from "./HomeFooter/HomeFooter";
import GalleryPictureSlider from "./GalleryPictureSlider/GalleryPictureSlider";
import CardCarousel from "./CardCarousel/CardCarousel";

const Home = () => {
  return (
    <div>
      <div>home</div>
      <div className="lg:mx-20 md:mx-12 mx-10">
        {/* all all hotels */}
        <CardCarousel></CardCarousel>
      </div>
      {/* blog ta kono effect porve na  */}
      <div>Blog</div>
      <GalleryPictureSlider></GalleryPictureSlider>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;

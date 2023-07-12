import React from "react";
import HomeFooter from "./HomeFooter/HomeFooter";
import GalleryPictureSlider from "./GalleryPictureSlider/GalleryPictureSlider";
import CardCarousel from "./CardCarousel/CardCarousel";
import HomeBlog from "./HomeBlog/HomeBlog";
import Offer from "./Offer/Offer";
import HomeContact from "./HomeContact/HomeContact";
import ServicesIcon from "./ServicesIcon/ServicesIcon";
import About from "./About/About";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <div>home</div>
      <div className="lg:mx-20 md:mx-12 mx-10">
        <About></About>
        <Services></Services>
        {/* all hotels */}
        <CardCarousel></CardCarousel>
        <Offer></Offer>
        <ServicesIcon></ServicesIcon>
        <HomeBlog></HomeBlog>
        <HomeContact></HomeContact>
      </div>
      <GalleryPictureSlider></GalleryPictureSlider>
      <HomeFooter></HomeFooter>
    </div>
  );
};

export default Home;

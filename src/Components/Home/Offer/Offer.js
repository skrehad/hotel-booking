import React from "react";
import "./Offer.css";

const Offer = () => {
  return (
    <div>
      <h1 className="text-center text-[40px] font-normal text-black font-serif my-10">
        We Offer to Our Guest
      </h1>
      <div className="grid md:lg:grid-cols-3 gap-10">
        <div className="image-container">
          <img
            className="image"
            src="https://i.ibb.co/dbZNJ1W/guest2-jpg.webp"
            alt="Background"
          />
          <div className="text-overlay">
            <h2 className="font-serif cursor-pointer text-white  text-3xl">
              Free Breakfast
            </h2>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            src="https://i.ibb.co/jwFt4qS/pexels-photo-5638639.jpg"
            alt="Background"
          />
          <div className="text-overlay">
            <h2 className="font-serif cursor-pointer text-white  text-3xl">
              Free Lunch
            </h2>
          </div>
        </div>
        <div className="image-container">
          <img
            className="image"
            src="https://i.ibb.co/80ZcwmD/guest3-jpg.webp"
            alt="Background"
          />
          <div className="text-overlay">
            <h2 className="font-serif cursor-pointer text-white  text-3xl">
              Free Dinner
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
import React from "react";

const About = () => {
  return (
    <div className="grid my-10 lg:grid-cols-2">
      <div className="pb-5 lg:p-10 md:p-8">
        <p className="text-2xl text-[#636a76] font-serif">ABOUT US</p>
        <h1 className="font-serif text-[40px] text-black">
          Welcome to Hotel Booking
        </h1>
        <p className="text-[#636a76] mt-5 text-xl">
          With over 40 hotels worldwide, Hotel Booking Group offers a wide
          variety of hotels catering for a perfect stay no matter where your
          destination.
        </p>
        <p className="text-xl mt-5">
          <span className="text-black">Manager:</span>{" "}
          <span className="text-[#454242]">Rehad Hasan</span>
        </p>
      </div>
      <div className="grid gap-2 grid-cols-2">
        <div className="grid grid-rows-2 gap-2">
          <div className="overflow-hidden rounded-lg">
            <img
              className="h-full transition ease-in-out duration-300  hover:scale-110 "
              src="https://i.ibb.co/ZgwPY8m/bg-1-jpg.webp"
              alt=""
              srcSet=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              className="h-full transition ease-in-out duration-300  hover:scale-110 "
              src="https://i.ibb.co/fnQgCZC/13-jpg.webp"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="h-full transition ease-in-out duration-300  hover:scale-125 "
            src="https://i.ibb.co/M2vHYv7/pexels-photo-5130268.jpg"
            alt=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;

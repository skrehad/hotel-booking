import React from "react";

const ServicesIcon = () => {
  return (
    <div>
      <h1 className="font-serif text-[40px] text-black text-center">
        Our Services
      </h1>
      <div className="grid mt-5 mb-10 gap-5 lg:grid-cols-3 md:grid-cols-3 ">
        <div className="bg-white rounded-md p-10">
          <img
            className="mx-auto"
            src="https://i.ibb.co/txW29T6/services-6-png.webp"
            alt=""
            srcset=""
          />
          <p className="hover:text-[#9aa09f] cursor-pointer text-center text-xl mt-4 font-serif text-black">
            Restaurant
          </p>
        </div>
        <div className="bg-white rounded-md p-10">
          <img
            className="mx-auto"
            src="https://i.ibb.co/rt7XyH9/services-2-png.webp"
            alt=""
            srcset=""
          />
          <p className=" hover:text-[#9aa09f] cursor-pointer text-xl text-center mt-4 font-serif text-black">
            Premium Pool
          </p>
        </div>
        <div className="bg-white rounded-md py-7 px-10">
          <img
            className="mx-auto"
            src="https://i.ibb.co/m9L3YGD/services-4-png.webp"
            alt=""
            srcset=""
          />
          <p className="hover:text-[#9aa09f] cursor-pointer text-center text-xl mt-4 font-serif text-black">
            Bar & Drink
          </p>
        </div>
        <div className="bg-white rounded-md p-10">
          <img
            className="mx-auto"
            src="https://i.ibb.co/X887Hd3/services-1-png.webp"
            alt=""
            srcset=""
          />
          <p className=" hover:text-[#9aa09f] cursor-pointer text-xl text-center mt-4 font-serif text-black">
            Wifi
          </p>
        </div>
        <div className="bg-white text-xl rounded-md p-10">
          <img
            className="mx-auto"
            src="https://i.ibb.co/M6YtF1Y/services-3-png.webp"
            alt=""
            srcset=""
          />
          <p className="hover:text-[#9aa09f] cursor-pointer text-center text-xl mt-4 font-serif text-black">
            Coffee Maker
          </p>
        </div>
        <div className="bg-white rounded-md p-10">
          <img
            className="mx-auto"
            src="https://i.ibb.co/p0sJWpW/services-5-png.webp"
            alt=""
            srcset=""
          />
          <p className=" hover:text-[#9aa09f] cursor-pointer text-xl text-center mt-4 font-serif text-black">
            TV HD
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesIcon;

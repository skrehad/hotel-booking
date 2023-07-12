import React from "react";

const ServicesIcon = () => {
  return (
    <div className="grid mt-20 mb-10 gap-5 lg:grid-cols-4 md:grid-cols-4">
      <div className="bg-white rounded-md py-7 px-10">
        <img
          className="mx-auto"
          src="https://i.ibb.co/8cyqqmk/icon-1-png.webp "
          alt=""
          srcset=""
        />
        <p className=" hover:text-[#37ebd3] cursor-pointer text-xl text-center mt-4 font-serif text-black">
          Transportation
        </p>
      </div>
      <div className="bg-white text-xl rounded-md py-7 px-10">
        <img
          className="mx-auto"
          src="https://i.ibb.co/KmYgjNp/icon-2-png.webp"
          alt=""
          srcset=""
        />
        <p className="hover:text-[#37ebd3] cursor-pointer text-center text-xl mt-4 font-serif text-black">
          Reiseservice
        </p>
      </div>
      <div className="bg-white rounded-md py-7 px-10">
        <img
          className="mx-auto"
          src="https://i.ibb.co/HKXTSwS/icon-3-png.webp"
          alt=""
          srcset=""
        />
        <p className="hover:text-[#37ebd3] cursor-pointer text-center text-xl mt-4 font-serif text-black">
          Restaurant
        </p>
      </div>
      <div className="bg-white rounded-md py-7 px-10">
        <img
          className="mx-auto"
          src="https://i.ibb.co/K07jKtz/icon-4-png.webp"
          alt=""
          srcset=""
        />
        <p className="hover:text-[#37ebd3] cursor-pointer text-center text-xl mt-4 font-serif text-black">
          Bar & Drink
        </p>
      </div>
    </div>
  );
};

export default ServicesIcon;

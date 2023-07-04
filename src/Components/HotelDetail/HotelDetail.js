import { Rating } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";

const HotelDetail = () => {
  const hotel = useLoaderData();
  const {
    _id,
    name,
    rating,
    price,
    description,
    image,
    image2,
    image3,
    image4,
    image5,
  } = hotel;
  //   console.log(hotel);
  return (
    <div className="lg:mx-32 mt-10 md:mx-20 mx-10">
      <div className="grid gap-3 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <img className="h-full rounded-lg" src={image} alt="" srcset="" />
        </div>
        <div>
          <div className="grid mb-3 grid-cols-2 gap-3">
            <img className="rounded-lg" src={image2} alt="" srcset="" />
            <img className="rounded-lg" src={image3} alt="" srcset="" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img className="rounded-lg" src={image4} alt="" srcset="" />
            <img className="rounded-lg" src={image5} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="pt-5 pb-10">
        <div className="grid mb-5 lg:grid-cols-2 md:grid-cols-2">
          <h1 className="text-black my-auto font-bold text-xl">{name}</h1>
          <div className="text-right">
            <Rating name="read-only" value={rating} readOnly />
            <p className="mr-2">
              <span class="text-2xl font-bold text-gray-900 ">
                ${price}
                <span className="text-sm">/night</span>
              </span>
            </p>
          </div>
        </div>
        <div className="grid mb-5 lg:grid-cols-2 md:grid-cols-2">
          <div>
            <h1 className="text-2xl font-semibold text-black mb-2">
              Description{" "}
            </h1>
            <p className="text-black ">{description}</p>
          </div>
          <div>Facilities</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HotelDetail;

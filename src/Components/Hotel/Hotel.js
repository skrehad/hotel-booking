import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Hotel = ({ hotel }) => {
  const { _id, image, name, rating, price } = hotel;
  console.log(hotel);
  return (
    <div>
      <div class="w-full my-10 max-w-sm bg-white border border-gray-200 rounded-md shadow">
        <img class="pb-5 rounded-t-lg h-[320px]" src={image} alt="" srcset="" />

        <div class="px-5 pb-5">
          <h5 class="text-xl mb-5 font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>

          <div class="flex text-center items-center mt-2.5 mb-5">
            <Rating name="read-only" value={rating} readOnly />
            <span class="bg-blue-100 text-blue-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold text-gray-900 ">
              ${price}
              <span className="text-sm">/night</span>
            </span>

            <Link
              to={`/hotels/${_id}`}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

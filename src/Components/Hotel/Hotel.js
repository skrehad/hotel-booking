import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Hotel = ({ hotel }) => {
  const { _id, image, name, rating, price } = hotel;
  // console.log(hotel);
  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full my-10 max-w-sm bg-white border border-gray-200 rounded-md shadow h-[500px] flex flex-col"
      >
        <img
          className="pb-5 rounded-t-lg h-[320px] w-full object-cover"
          src={image}
          alt={name}
        />

        <div className="px-5 pb-5 flex flex-col flex-grow">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 mb-4">
            {name}
          </h5>

          <div className="flex-grow" />

          <div className="flex text-center items-center mb-5">
            <Rating name="read-only" value={rating} readOnly />
            <span className="bg-blue-100 text-blue-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded ml-3">
              {rating}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              ${price}
              <span className="text-sm">/night</span>
            </span>

            <Link
              to={`/hotels/${_id}`}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Details
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hotel;

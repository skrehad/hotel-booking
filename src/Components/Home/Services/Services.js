import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Services = () => {
  return (
    <div>
      <h1 className="font-serif text-[40px] text-black text-center">
        Our Services
      </h1>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className="grid mt-5 mb-10 gap-5 lg:grid-cols-3 md:grid-cols-3 "
      >
        <div className="bg-white rounded-md p-10 shadow-xl">
          <img
            className="mx-auto"
            src="https://i.ibb.co/txW29T6/services-6-png.webp"
            alt=""
            srcSet=""
          />
          <p className="hover:text-[#9aa09f] cursor-pointer text-center text-xl mt-4 font-serif text-black">
            Restaurant
          </p>
        </div>
        <div className="bg-white rounded-md p-10 shadow-xl">
          <img
            className="mx-auto"
            src="https://i.ibb.co/rt7XyH9/services-2-png.webp"
            alt=""
            srcSet=""
          />
          <p className=" hover:text-[#9aa09f] cursor-pointer text-xl text-center mt-4 font-serif text-black">
            Premium Pool
          </p>
        </div>
        <div className="bg-white rounded-md py-7 px-10 shadow-xl">
          <img
            className="mx-auto"
            src="https://i.ibb.co/m9L3YGD/services-4-png.webp"
            alt=""
            srcSet=""
          />
          <p className="hover:text-[#9aa09f] cursor-pointer text-center text-xl mt-4 font-serif text-black">
            Bar & Drink
          </p>
        </div>
        <div className="bg-white rounded-md p-10 shadow-xl">
          <img
            className="mx-auto"
            src="https://i.ibb.co/X887Hd3/services-1-png.webp"
            alt=""
            srcSet=""
          />
          <p className=" hover:text-[#9aa09f] cursor-pointer text-xl text-center mt-4 font-serif text-black">
            Wifi
          </p>
        </div>
        <div className="bg-white text-xl rounded-md p-10 shadow-xl">
          <img
            className="mx-auto"
            src="https://i.ibb.co/M6YtF1Y/services-3-png.webp"
            alt=""
            srcSet=""
          />
          <p className="hover:text-[#9aa09f] cursor-pointer text-center text-xl mt-4 font-serif text-black">
            Coffee Maker
          </p>
        </div>
        <div className="bg-white rounded-md p-10 shadow-xl">
          <img
            className="mx-auto"
            src="https://i.ibb.co/p0sJWpW/services-5-png.webp"
            alt=""
            srcSet=""
          />
          <p className=" hover:text-[#9aa09f] cursor-pointer text-xl text-center mt-4 font-serif text-black">
            TV HD
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;

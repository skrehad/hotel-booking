import React from "react";
import "./Offer.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const Offer = () => {
  return (
    <div className="my-10">
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className="text-center text-[40px] font-normal text-black font-serif my-10"
      >
        We Offer to Our Guest
      </motion.h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="image-container overflow-hidden shadow-xl"
        >
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
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="image-container overflow-hidden shadow-xl"
        >
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
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewPort={{ once: false, amount: 0.3 }}
          className="image-container overflow-hidden shadow-xl"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;

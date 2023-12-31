import React, { useState, useEffect } from "react";
import "./CardCarousel.css";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLoading, data: hotels } = useQuery("hotels", () =>
    fetch(
      "https://hotel-booking-backend-server-skrehad.vercel.app/hotels"
    ).then((res) => res.json())
  );

  const displayedHotels = hotels?.slice(currentIndex, currentIndex + 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (hotels?.length || 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [hotels?.length]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-center text-[40px] font-normal text-black font-serif my-10">
          Explore Our Hotels
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className="carousel-container"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hotels && hotels.length > 3 ? (
            <>
              {displayedHotels
                .concat()
                .reverse()
                .map((hotel) => (
                  <div key={hotel._id} className="text-center">
                    <img className="h-[250px]" src={hotel.image} alt="Shoes" />
                    <div className="mt-5">
                      <h2 className="card-title text-[#454242] font-serif">
                        {hotel.name}
                      </h2>
                      <div className="flex mt-3">
                        <Rating
                          name="read-only "
                          className="w-1/2 my-auto"
                          value={hotel.rating}
                          readOnly
                        />
                        <button className="btn w-1/2 text-right btn-primary">
                          See Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              {hotels &&
                hotels
                  .concat()
                  .reverse()
                  .map((hotel) => (
                    <div key={hotel._id}>
                      <img
                        className="card-image h-[250px]"
                        src={hotel.image}
                        alt="Shoes"
                      />
                      <div className="mt-5">
                        <h2 className="card-title">{hotel.name}</h2>
                        <div className="flex mt-3">
                          <Rating
                            name="read-only "
                            className="w-1/2"
                            value={hotel.rating}
                            readOnly
                          />
                          <button className="btn w-1/2 text-right btn-primary">
                            See Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className="text-center my-10"
      >
        <Link to="/hotels">
          <button className="text-2xl shadow-xl text-[#454242] hover:text-white rounded-sm py-3 px-7 border border-[#454242] hover:bg-[#454242] hover:border-none font-medium">
            See All Hotels
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CardCarousel;

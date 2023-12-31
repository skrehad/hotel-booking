import React from "react";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const HotelOffers = () => {
  const { isLoading, data: offerHotels } = useQuery("offerHotels", () =>
    fetch(
      "https://hotel-booking-backend-server-skrehad.vercel.app/offerHotels"
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className="text-center text-[40px] font-normal text-black font-serif my-10"
      >
        Ongoing Great Offers
      </motion.h1>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewPort={{ once: false, amount: 0.3 }}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-5"
      >
        {offerHotels.map((hotel, index) => (
          <div
            key={index}
            className="w-full max-w-sm shadow-xl bg-white border border-gray-200 rounded-md"
          >
            <img
              className="pb-5 rounded-t-md h-[320px]"
              src={hotel.image}
              alt=""
              srcSet=""
            />
            <div className="p-5">
              <h1 className="font-serif text-[#454242] text-2xl mb-5">
                Up to 35% savings on Club rooms and Suites
              </h1>
              <p className="font-serif text-[#796e6e]">Luxuries condition</p>
              <p className="font-serif text-[#796e6e]">
                3 Adults & 2 Children size
              </p>
              <p className="font-serif text-[#796e6e] mb-6">Sea view side</p>
              <div className="text-center mb-5">
                <button className="">
                  <Link
                    to={`/hotels/${hotel._id}`}
                    className="text-[#796e6e] hover:text-white rounded-sm py-2 px-5 border border-[#796e6e] hover:bg-[#796e6e] hover:border-none   font-medium text-sm"
                  >
                    Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HotelOffers;

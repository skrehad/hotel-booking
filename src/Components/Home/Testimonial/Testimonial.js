import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import { Rating } from "@mui/material";

const Testimonial = () => {
  const { isLoading, data: reviews } = useQuery("reviews", () =>
    fetch(
      "https://hotel-booking-backend-server-skrehad.vercel.app/reviews"
    ).then((res) => res.json())
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setCurrentItem(reviews[currentIndex]);
    }
  }, [currentIndex, reviews]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        reviews ? (prevIndex + 1) % reviews.length : 0
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [reviews]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="lg:flex md:flex mb-10 bg-white rounded-md mt-20 shadow-xl">
        <div className="lg:w-1/3 md:w-1/3 flex-none">
          <img
            className="lg:rounded-l-md shadow-xl md:rounded-l-md rounded-t-md lg:rounded-tr-none md:rounded-tr-none"
            src="https://i.ibb.co/VM0qhLC/testimony-img-jpg.webp"
            alt=""
            srcSet=""
          />
        </div>
        <div className="lg:w-2/3 md:w-2/3 lg:px-8 md:px-8 lg:py-5 md:py-5 p-4">
          {currentItem && (
            <div>
              <h1 className="text-xl lg:text-[24px] lg:mb-5 mb-2 md:mb-0 md:text-[16px] font-serif text-[#796e6e]">
                Testimonials
              </h1>
              <h1 className="lg:text-[42px] text-[30px] md:text-xl font-serif text-[#454242]">
                What Customers Say?
              </h1>
              <p className="mt-8 lg:mt-10 font-serif md:text-[12px] lg:text-[18px] md:mt-3 text-xl">
                {currentItem.description}
              </p>
              <div className="flex mt-10 lg:mt-20 md:mt-5 items-center">
                {currentItem.photo ? (
                  <img
                    className="w-20 h-20 md:w-10 md:h-10 rounded-full mr-4"
                    src={currentItem.photo}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-20 h-20 md:w-10 md:h-10 rounded-full mr-4"
                    src="https://i.ibb.co/S5PRg6x/download.jpg"
                    alt=""
                  />
                )}
                <div className="text-sm">
                  <p className="text-black text-[16px] mb-2 text-center leading-none">
                    {currentItem.name}
                  </p>
                  <Rating
                    name="read-only "
                    className="my-auto"
                    value={currentItem.rating}
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="text-center my-10">
        <Link to="/review">
          <button className="text-2xl text-[#454242] hover:text-white rounded-sm py-3 px-7 border border-[#454242] hover:bg-[#454242] hover:border-none font-medium">
            Add a Review
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;

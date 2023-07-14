import React, { useState, useEffect } from "react";
import "./CardCarousel.css";
import Loading from "../../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLoading, data: hotels } = useQuery("hotels", () =>
    fetch("http://localhost:5000/hotels").then((res) => res.json())
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
      <div>
        <h1 className="text-center text-[40px] font-normal text-black font-serif my-10">
          Explore Our Hotels
        </h1>
      </div>
      <div className="carousel-container">
        <div className=" grid md:grid-cols-3 lg:grid-cols-3 gap-5">
          {hotels && hotels.length > 3 ? (
            <>
              {displayedHotels
                .concat()
                .reverse()
                .map((hotel) => (
                  <div key={hotel.id} className="text-center">
                    <img className="h-[250px]" src={hotel.image} alt="Shoes" />
                    <div className="card-body h-[160px]">
                      <h2 className="card-title text-[#454242] font-serif">
                        {hotel.name}
                      </h2>
                      <div className="flex">
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
                    <div key={hotel.id} className="">
                      <img
                        className="card-image h-[250px]"
                        src={hotel.image}
                        alt="Shoes"
                      />
                      <div className="card-body h-[160px]">
                        <h2 className="card-title">{hotel.name}</h2>
                        <div className="flex">
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
      </div>
      <div className="text-center my-10">
        <Link to="/hotels">
          <button className="text-2xl text-[#454242] hover:text-white rounded-sm py-3 px-7 border border-[#454242] hover:bg-[#454242] hover:border-none font-medium">
            See All Hotels
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardCarousel;

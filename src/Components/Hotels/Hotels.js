import React from "react";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import Hotel from "../Hotel/Hotel";

const Hotels = () => {
  const { isLoading, data: hotels } = useQuery("hotels", () =>
    fetch("http://localhost:5000/hotels").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/nkfdw57/rentokil-image-product-lumnia-fly-hotel-hospitality-slim-fly-control-glo-1.webp')] h-[200px] md:h-[300px] lg:h-[500px] bg-cover bg-no-repeat">
        <div className="text-center pt-16 md:pt-28 lg:pt-40">
          <h1 className=" text-[50px] font-bold font-serif text-white ">
            Our Hotels
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mx-32 md:mx-20 mx-10">
        {hotels.map((hotel) => (
          <Hotel key={hotels._id} hotel={hotel}></Hotel>
        ))}
      </div>
    </div>
  );
};

export default Hotels;

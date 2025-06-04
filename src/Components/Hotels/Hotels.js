// import React from "react";
// import Loading from "../../Shared/Loading/Loading";
// import { useQuery } from "react-query";
// import Hotel from "../Hotel/Hotel";
// import useTitle from "../../Shared/TitleChange/TitleChange";

// const Hotels = () => {
//   useTitle("Hotels");

//   const { isLoading, data: hotels } = useQuery("hotels", () =>
//     fetch(
//       "https://hotel-booking-backend-server-skrehad.vercel.app/hotels"
//     ).then((res) => res.json())
//   );
//   if (isLoading) {
//     return <Loading></Loading>;
//   }
//   return (
//     <div>
//       <div className="bg-[url('https://i.ibb.co/nkfdw57/rentokil-image-product-lumnia-fly-hotel-hospitality-slim-fly-control-glo-1.webp')] h-[200px] md:h-[300px] lg:h-[500px] bg-cover bg-no-repeat">
//         <div className="text-center pt-16 md:pt-28 lg:pt-40">
//           <h1 className=" text-[50px] font-bold font-serif text-white ">
//             Our Hotels
//           </h1>
//         </div>
//       </div>
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mx-32 md:mx-20 mx-10">
//         {hotels.map((hotel) => (
//           <Hotel key={hotel._id} hotel={hotel}></Hotel>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Hotels;

import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import Hotel from "../Hotel/Hotel";
import useTitle from "../../Shared/TitleChange/TitleChange";

const Hotels = () => {
  useTitle("Hotels");

  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");

  const limit = 3;

  // Fetching all hotels only once
  const { isLoading, data: allHotels } = useQuery("hotels", () =>
    fetch(
      "https://hotel-booking-backend-server-skrehad.vercel.app/hotels"
    ).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  // Apply filters and sorting on frontend
  let filteredHotels = allHotels;

  if (location) {
    const search = location.toLowerCase().trim();

    filteredHotels = filteredHotels.filter((hotel) => {
      const name = hotel.name?.toLowerCase() || "";
      const loc = hotel.location?.toLowerCase() || "";

      const nameMatches = name
        .split(" ")
        .some((word) => word.startsWith(search));

      const locMatches = loc.split(" ").some((word) => word.startsWith(search));

      return nameMatches || locMatches;
    });
  }

  if (rating) {
    filteredHotels = filteredHotels.filter(
      (hotel) => String(hotel.rating) === rating
    );
  }

  if (priceRange === "low") {
    filteredHotels.sort((a, b) => a.price - b.price);
  } else if (priceRange === "high") {
    filteredHotels.sort((a, b) => b.price - a.price);
  }

  // Pagination
  const totalPages = Math.ceil(filteredHotels.length / limit);
  const paginatedHotels = filteredHotels.slice(
    (page - 1) * limit,
    page * limit
  );

  return (
    <div>
      {/* Banner */}
      <div className="bg-[url('https://i.ibb.co/nkfdw57/rentokil-image-product-lumnia-fly-hotel-hospitality-slim-fly-control-glo-1.webp')] h-[200px] md:h-[300px] lg:h-[500px] bg-cover bg-no-repeat">
        <div className="text-center pt-16 md:pt-28 lg:pt-40">
          <h1 className="text-[50px] font-bold font-serif text-white">
            Our Hotels
          </h1>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap mt-8 justify-center gap-4 my-6">
        <input
          type="text"
          placeholder="Search by location"
          value={location}
          onChange={(e) => {
            setPage(1);
            setLocation(e.target.value);
          }}
          className="input input-bordered"
        />

        <select
          onChange={(e) => {
            setPage(1);
            setPriceRange(e.target.value);
          }}
          className="select select-bordered"
        >
          <option value="">All Prices</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>

        <select
          onChange={(e) => {
            setPage(1);
            setRating(e.target.value);
          }}
          className="select cursor-pointer select-bordered"
        >
          <option value="">All Ratings</option>
          <option className="" value="5">
            5 Star
          </option>
          <option value="4">4 Star</option>
          <option value="3">3 Star</option>
        </select>
      </div>

      {/* Hotels */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:mx-32 md:mx-20 mx-10">
        {paginatedHotels.length > 0 ? (
          paginatedHotels.map((hotel) => (
            <Hotel key={hotel._id || hotel.id} hotel={hotel} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No hotels found.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8 gap-2">
        <button
          className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setPage(index + 1)}
            className={`btn ${
              page === index + 1 ? "btn-primary" : "btn-outline"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hotels;

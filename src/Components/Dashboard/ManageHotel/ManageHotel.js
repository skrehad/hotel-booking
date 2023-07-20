import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { Rating } from "@mui/material";

const ManageHotel = () => {
  const [deletingHotel, setDeletingHotel] = useState(null);
  const closeModal = () => {
    setDeletingHotel(null);
  };

  const {
    isLoading,
    data: allHotels,
    refetch,
  } = useQuery(
    {
      queryKey: ["allHotels"],
      queryFn: async () => {
        try {
          const res = await fetch(
            "https://hotel-booking-backend-server-skrehad.vercel.app/hotels",
            {
              headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
          const data = await res.json();
          return data;
        } catch (error) {}
      },
    }
    // "allHotels",
    // () => fetch("https://hotel-booking-backend-server-skrehad.vercel.app/hotels"),
    // {
    //   headers: {
    //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // }.then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteHotel = (hotel) => {
    fetch(
      `https://hotel-booking-backend-server-skrehad.vercel.app/hotels/${hotel._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${hotel.name} deleted successfully`);
        }
      });
  };

  return (
    <div className="w-80 mx-auto md:w-full lg:w-full">
      <h1 className=" text-4xl mb-5 text-center text-black">All Hotels</h1>

      <div className="overflow-x-auto">
        <table className="table border-2 mb-5">
          {/* head */}
          <thead className="bg-black text-white text-center">
            <tr>
              <th></th>
              <th>Publisher Name</th>
              <th>Hotel Name</th>
              <th>Hotel Rating</th>
              <th>Main Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allHotels?.map((hotel, i) => (
              <tr className="text-center text-black" key={hotel._id}>
                <th>{i + 1}</th>
                <td className="text-base font-bold">{hotel.publisher}</td>
                <td className="font-bold text-base px-0">{hotel.name}</td>
                <td>
                  <Rating name="read-only" value={hotel.rating} readOnly />
                </td>
                <td className="px-0">
                  <img
                    className="h-32 rounded-lg w-full"
                    src={hotel.image}
                    alt=""
                    srcSet=""
                  />
                </td>
                <td>
                  <label
                    onClick={() => setDeletingHotel(hotel)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm text-white"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingHotel && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingHotel.name}. It will remove from client those client booking this hotel.`}
          successAction={handleDeleteHotel}
          successButtonName="Delete"
          modalData={deletingHotel}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageHotel;

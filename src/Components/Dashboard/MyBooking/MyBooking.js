import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { Rating } from "@mui/material";

const MyBooking = () => {
  const [deletingBooking, setDeletingBooking] = useState(null);
  const closeModal = () => {
    setDeletingBooking(null);
  };

  const {
    isLoading,
    data: allBookings,
    refetch,
  } = useQuery("allBookings", () =>
    fetch("http://localhost:5000/booking").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteBooking = (booking) => {
    fetch(`http://localhost:5000/booking/${booking._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${booking.name} deleted successfully`);
        }
      });
  };
  return (
    <div className="w-80 mx-auto md:w-full lg:w-full">
      <h1 className=" text-4xl mb-5 text-center text-black">MY Bookings</h1>

      <div className="overflow-x-auto">
        <table className="table border-2 mb-5">
          {/* head */}
          <thead className="bg-black text-white text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Booking Date</th>
              <th>Hotel Name</th>
              <th>Hotel Rating</th>
              <th>Image</th>
              <th>Hotel Bill</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allBookings?.map((booking, i) => (
              <tr className="text-center text-black" key={booking._id}>
                <th>{i + 1}</th>
                <td className="text-base font-bold">{booking.publisher}</td>
                <td className="font-bold text-base px-0">{booking.name}</td>
                <td>
                  <Rating name="read-only" value={booking.rating} readOnly />
                </td>
                <td className="px-0">
                  <img
                    className="h-32 rounded-lg w-full"
                    src={booking.image}
                    alt=""
                    srcset=""
                  />
                </td>
                <td>
                  <label
                    onClick={() => setDeletingBooking(booking)}
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
      {deletingBooking && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingBooking.name}. It will remove from client those client booking this hotel.`}
          successAction={handleDeleteBooking}
          successButtonName="Delete"
          modalData={deletingBooking}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyBooking;

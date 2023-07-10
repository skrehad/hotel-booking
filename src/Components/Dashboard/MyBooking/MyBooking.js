import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import { Rating } from "@mui/material";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyBooking = () => {
  const [deletingBooking, setDeletingBooking] = useState(null);
  const { user } = useContext(AuthContext);
  const closeModal = () => {
    setDeletingBooking(null);
  };

  const url = `http://localhost:5000/booking?email=${user?.email}`;

  const {
    data: allBookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
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
    <div className="w-80 mx-auto md:w-[650px] lg:w-full">
      <h1 className="text-4xl mb-5 text-center text-black">MY Bookings</h1>

      <div className="overflow-x-auto">
        <table className="table border-2 mb-5">
          {/* head */}
          <thead className="bg-black text-white text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Booking Date</th>
              <th>Hotel Name</th>
              <th>Rating</th>
              <th>Image</th>
              <th>Bill</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allBookings?.length === 0 ? (
              <tr className="text-center text-black">
                <td colSpan="10">
                  <div className="text-center my-8 mx-2">
                    <div className="font-bold text-gray-800 font-mono text-2xl mb-4">
                      You have no bookings. Please book a hotel...
                    </div>
                    <Link to="/hotels">
                      <button className="btn my-5 text-white text-xl border-purple-900 bg-gray-800 font-mono text-center">
                        See Hotels
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ) : (
              allBookings?.map((booking, i) => (
                <tr className="text-center text-black" key={booking._id}>
                  <th>{i + 1}</th>
                  <td className="pr-2 pl-0">{booking.userName}</td>
                  <td className="pr-2 pl-0">{booking.email}</td>
                  <td className="px-0">
                    <p>{booking.startDate}</p> to
                    <p>{booking.endDate}</p>
                  </td>
                  <td className="pr-0 pl-0">{booking.name}</td>
                  <td className="pr-2 pl-0">
                    <Rating name="read-only" value={booking.rating} readOnly />
                  </td>
                  <td className="px-0">
                    <img
                      className="h-32 rounded-lg w-full"
                      src={booking.image}
                      alt=""
                      srcSet=""
                    />
                  </td>
                  <td className="font-bold px-2">
                    ${booking.price * booking.totalDay}
                  </td>
                  <td className="pr-2 pl-0">
                    <button className="btn test-white btn-sm">Pay</button>
                  </td>
                  <td className="pr-2 pl-0">
                    <label
                      onClick={() => setDeletingBooking(booking)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm text-white"
                    >
                      Cancel
                    </label>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="text-center pb-8">
        {allBookings?.length === 0 ? (
          <></>
        ) : (
          <Link to="/hotels">
            <button className="btn my-5 text-white text-xl border-purple-900 bg-gray-800 font-mono ">
              See Hotels
            </button>
          </Link>
        )}
      </div>
      {deletingBooking && (
        <ConfirmationModal
          title="Are you sure you want to delete?"
          message={`If you delete ${deletingBooking.name}, it will be removed from your booking list.`}
          successAction={handleDeleteBooking}
          successButtonName="Delete"
          modalData={deletingBooking}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default MyBooking;

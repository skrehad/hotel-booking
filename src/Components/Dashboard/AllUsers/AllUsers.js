import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../../Shared/ConfirmationModal/ConfirmationModal";
import useTitle from "../../../Shared/TitleChange/TitleChange";

const AllUsers = () => {
  useTitle("AllUsers");

  const [searchItem, setSearchItem] = useState("");
  const [deletingUser, setDeletingUser] = useState(null);
  const closeModal = () => {
    setDeletingUser(null);
  };

  const {
    isLoading,
    data: allUsers,
    refetch,
  } = useQuery("allUsers", () =>
    fetch("https://hotel-booking-backend-server-skrehad.vercel.app/users").then(
      (res) => res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteUser = (user) => {
    fetch(
      `https://hotel-booking-backend-server-skrehad.vercel.app/users/${user._id}`,
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
          toast.success(`User ${user.name} deleted successfully`);
        }
      });
  };

  const handleMakeAdmin = (id) => {
    fetch(
      `https://hotel-booking-backend-server-skrehad.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin Successfully");
          refetch();
        }
      });
  };
  const searchHandler = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="w-80 mx-auto md:w-full lg:w-full">
      <h1 className=" text-4xl mb-5 text-center text-black">All Users</h1>
      <div className=" bg-gray-100 mb-8 flex justify-center items-center">
        <div className=" text-center rounded-lg">
          <form onSubmit={searchHandler} className="w-80">
            <div className="flex items-center border border-purple-900 bg-white rounded-lg overflow-hidden pl-1 justify-between">
              <input
                id="searchInput"
                className="text-base bg-white text-black flex-grow outline-none font-bold font-mono px-2"
                type="text"
                placeholder="Search Email or Name"
                onChange={(event) => setSearchItem(event.target.value)}
              />
              <div className="ms:flex items-center pl-2 rounded-lg  mx-auto ">
                <button className="bg-black text-white font-bold text-base rounded-lg px-4 py-2 font-mono">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table border-2 mb-5">
          {/* head */}
          <thead className="bg-black text-white text-center">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allUsers
              .filter((user) => {
                if (searchItem === "") {
                  return user;
                } else if (
                  user.email.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((user, i) => (
                <tr className="text-center text-black" key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-sm btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <label
                      onClick={() => setDeletingUser(user)}
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
      {deletingUser && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`If you delete ${deletingUser.name}. It cannot be undone.`}
          successAction={handleDeleteUser}
          successButtonName="Delete"
          modalData={deletingUser}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllUsers;

import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";

const AllUsers = () => {
  const { isLoading, data: allUsers } = useQuery("blogData", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  // const handleDeleteDoctor = (doctor) => {
  //   fetch(
  //     `https://doctors-portal-server-five-black.vercel.app/doctors/${doctor._id}`,
  //     {
  //       method: "DELETE",
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         refetch();
  //         toast.success(`Doctor ${doctor.name} deleted successfully`);
  //       }
  //     });
  // };

  return (
    <div>
      <h1 className=" text-4xl mb-5 text-center text-black">All Users</h1>

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
            {allUsers.map((user, i) => (
              <tr className="text-center text-black" key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {/* {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  )} */}
                  <button
                    // onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Make Admin
                  </button>
                </td>
                <td>
                  <button className="btn btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

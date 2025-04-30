import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../Shared/TitleChange/TitleChange";

const Review = () => {
  useTitle("Review");

  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleAddReview = (data) => {
    const review = {
      name: user.displayName,
      photo: user.photoURL,
      email: user.email,
      rating: data.rating,
      description: data.description,
    };
    // console.log(review);

    fetch("https://hotel-booking-backend-server-skrehad.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("your review is added successfully");
        navigate("/");
      });
  };

  return (
    <div className=" bg-[url('https://i.ibb.co/VM0qhLC/testimony-img-jpg.webp')] bg-cover rounded-lg h-full p-7 mx-auto">
      <div className="">
        <h1 className=" text-4xl mb-5 text-center text-white">Add A Review</h1>

        <form
          className="bg-white mb-10 lg:w-96 md:w-96 mx-auto p-5 rounded-lg"
          onSubmit={handleSubmit(handleAddReview)}
        >
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">Your Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">Your Email</span>
            </label>
            <input
              type="text"
              value={user?.email}
              readOnly
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating Number"
              {...register("rating")}
              required
              min={1}
              max={5}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Review Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Share your Experience"
              {...register("description")}
              required
              className="input h-40 pt-2 input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="text-center">
            <input className="btn   mt-4" value="Add a Review" type="submit" />
          </div>
        </form>
      </div>
      <div className="text-center my-10">
        <Link to="/">
          <button className="text-2xl text-white hover:text-black rounded-sm py-3 px-7 border border-white hover:bg-white hover:border-none font-medium">
            Go to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Review;

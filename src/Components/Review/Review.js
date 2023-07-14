import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Review = () => {
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
    // console.log(blog);

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success("your review is added successfully");
        navigate("/blog");
      });
  };

  return (
    <div className=" bg-[url('https://i.ibb.co/C2dPzvb/photo-1571003123894-1f0594d2b5d9.jpg')] bg-cover rounded-lg h-full p-7 mx-auto">
      <div className="">
        <h1 className=" text-4xl mb-5 text-center text-black">Add A Review</h1>

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
              disabled
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
              disabled
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">Rating</span>
            </label>
            <input
              type="number"
              {...register("rating", {
                required: "rating is Required",
              })}
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
              placeholder="Review Us"
              {...register("description", {
                required: "description is Required",
              })}
              required
              className="input h-40 pt-2 input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="text-center">
            <input className="btn   mt-4" value="Add a Blog" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;

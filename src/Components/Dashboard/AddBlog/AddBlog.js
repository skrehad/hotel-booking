import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const handleAddBlog = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const blog = {
            publisherName: user.displayName,
            publisherPhoto: user.photoURL,
            title: data.title,
            description: data.description,
            date: data.date,
            image: imgData.data.url,
          };
          // console.log(blog);

          fetch("http://localhost:5000/blog", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              // authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(blog),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("your blog is added successfully");
              navigate("/blog");
            });
        }
      });
  };

  return (
    <div className=" bg-[url('https://i.ibb.co/C2dPzvb/photo-1571003123894-1f0594d2b5d9.jpg')] bg-cover rounded-lg h-full p-7 mx-auto">
      <div className="">
        <h1 className=" text-4xl mb-5 text-center text-black">Add A Blog</h1>

        <form
          className="bg-white mb-10 w-96 mx-auto p-5 rounded-lg"
          onSubmit={handleSubmit(handleAddBlog)}
        >
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">Blog Title</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Name is Required",
              })}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Blog Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", {
                required: "description is Required",
              })}
              required
              className="input  input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text text-black">
                Enter the Blog Publish Date
              </span>
            </label>

            <input
              type="date"
              required
              className="p-3 w-full max-w-xs rounded"
              {...register("date", {
                required: "Date is Required",
              })}
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Blog Photo</span>
            </label>
            <input
              type="file"
              required
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input input-bordered py-2 w-full max-w-xs"
            />
            {errors.img && <p className="text-red-500">{errors.img.message}</p>}
          </div>
          <div className="text-center">
            <input className="btn   mt-4" value="Add a Blog" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

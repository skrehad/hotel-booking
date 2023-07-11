import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddGalleryPicture = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddGalleryPicture = (data) => {
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
          const GalleryImage = {
            image: imgData.data.url,
          };

          fetch("http://localhost:5000/gallery", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(GalleryImage),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("your Picture is added successfully in Gallery");
              navigate("/");
            });
        }
      });
  };
  return (
    <div className=" bg-[url('https://i.ibb.co/cyXKh6v/beautiful-luxury-outdoor-swimming-pool-hotel-resort-74190-7433.jpg')] bg-cover rounded-lg h-full p-7 mx-auto">
      <div className="">
        <h1 className=" text-4xl mb-5 text-center text-black">
          Add Gallery Picture
        </h1>

        <form
          className="bg-white mb-10 lg:w-96 md:w-96 mx-auto p-5 rounded-lg"
          onSubmit={handleSubmit(handleAddGalleryPicture)}
        >
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">Gallery Photo</span>
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
            <input
              className="btn   mt-4"
              value="Add Gallery Picture"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddGalleryPicture;

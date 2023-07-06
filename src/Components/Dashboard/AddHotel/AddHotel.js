import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AddHotel = () => {
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
          const hotel = {
            publisher: user.displayName,
            name: data.name,
            description: data.description,
            rating: data.rating,
            price: data.price,
            image: imgData.data.url,
            image2: data.image2,
            image3: data.image3,
            image4: data.image4,
            image5: data.image5,
          };
          fetch("http://localhost:5000/hotels", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(hotel),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("your hotel is added successfully");
              navigate("/hotels");
            });
        }
      });
  };

  return (
    <div className=" bg-[url('https://i.ibb.co/3hyp3Cg/pexels-photo-2964163.jpg')] bg-cover rounded-lg h-full p-7 mx-auto">
      <div className="">
        <h1 className=" text-4xl mb-5 text-center text-black">Add A Hotel</h1>

        <form
          className="bg-white mb-10 lg:w-96 md:w-96 mx-auto p-5 rounded-lg"
          onSubmit={handleSubmit(handleAddBlog)}
        >
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">Hotel Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
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
              <span className="label-text text-black">Hotel Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Description"
              {...register("description", {
                required: "description is Required",
              })}
              required
              className="input pt-2 h-32 input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="label">
              <span className="label-text text-black">
                Enter hotel rating (1-5)
              </span>
            </label>

            <input
              className="input input-bordered py-2 w-full max-w-xs"
              type="number"
              {...register("rating", {
                required: "rating is Required",
              })}
              id="numberInput"
              min="1"
              max="5"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-black">
                Enter hotel per day price
              </span>
            </label>

            <input
              className="input input-bordered py-2 w-full max-w-xs"
              type="number"
              {...register("price", {
                required: "price is Required",
              })}
              id="numberInput"
              min="100"
            />
          </div>
          <div>
            {/* <input type="file" multiple onChange={handleInputChange} /> */}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-black">
                Main Photo upload from your device
              </span>
            </label>
            <input
              type="file"
              required
              {...register(`image`, {
                required: "Photo is Required",
              })}
              className="input input-bordered py-2 w-full max-w-xs"
            />
            {errors[`image`] && (
              <p className="text-red-500">{errors[`image`].message}</p>
            )}
          </div>

          {/* {[1, 2, 3, 4, 5].map((index) => (
              <div key={index} className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black">
                    Blog Photo {index}
                  </span>
                </label>
                <input
                  type="file"
                  required
                  {...register(`image${index}`, {
                    required: "Photo is Required",
                  })}
                  className="input input-bordered py-2 w-full max-w-xs"
                />
                {errors[`image${index}`] && (
                  <p className="text-red-500">
                    {errors[`image${index}`].message}
                  </p>
                )}
              </div>
            ))} */}

          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">2nd image link</span>
            </label>
            <input
              type="text"
              placeholder="2nd image link"
              {...register("image2", {
                required: "image2 is Required",
              })}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">3rd image link</span>
            </label>
            <input
              type="text"
              placeholder="3rd image link"
              {...register("image3", {
                required: "image3 is Required",
              })}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">4th image link</span>
            </label>
            <input
              type="text"
              placeholder="4th image link"
              {...register("image4", {
                required: "image4 is Required",
              })}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text text-black">5th image link</span>
            </label>
            <input
              type="text"
              placeholder="5th image link"
              {...register("image5", {
                required: "image5 is Required",
              })}
              required
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="text-center">
            <input className="btn mt-4" value="Add a Hotel" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;

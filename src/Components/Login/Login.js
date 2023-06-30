import React from "react";
import { Link } from "react-router-dom";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="card rounded-none bg-[url('https://i.ibb.co/dkGZY8x/St-Regis-Mauritius-Resort.jpg')]  shadow-2xl">
        <div className="flex mx-auto mt-14 mb-8">
          <img
            className="w-[50px] rounded-lg headerImage h-[50px]"
            src="https://i.ibb.co/NNT3GBS/favicon.jpg"
            alt=""
          />
          <div className=" ml-2 uppercase text-black italic font-bold mt-3">
            Hotel Booking.com
          </div>
        </div>

        <div className="card cardDiv m-auto flex-shrink-0 lg:w-full max-w-sm mb-20 shadow-3xl">
          <div>
            <h1 className="text-3xl mt-10 text-white  text-center">Log In</h1>
          </div>

          <div className="card-body cardBody gap-0 px-16">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] text-white">Email</span>
              </label>

              <input
                type="text"
                placeholder="Enter your Email"
                className="input input-bordered bg-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[18px] text-white">
                  Password
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                className="input input-bordered bg-none"
              />
              <Link>
                <span className="text-white hover:underline text-[12px]">
                  Forget Password
                </span>
              </Link>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <div className=" mx-auto mb-3 ">
            <p className="underline mb-4 text-center text-white text-xl font-mono font-bold">
              OR
            </p>
            <div className="flex gap-5 mt-2">
              <div className="flex btn btn-primary">
                <BsFacebook className="cursor-pointer text-white text-2xl"></BsFacebook>
                <p>Facebook</p>
              </div>
              <div className="flex btn btn-primary">
                <BsGoogle className="cursor-pointer text-white text-2xl"></BsGoogle>
                <p className="mr-4">Google</p>
              </div>
            </div>
          </div>
          <Link
            className="text-white text-center mb-8 hover:underline"
            to="/signup"
          >
            New User! Please SignUp First...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

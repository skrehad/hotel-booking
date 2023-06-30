import React from "react";
import { Link } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";

const Login = () => {
  return (
    <div>
      <div className="card rounded-none bg-[url('https://i.ibb.co/dkGZY8x/St-Regis-Mauritius-Resort.jpg')] bg-cover shadow-2xl">
        <div className="flex mx-auto my-14">
          <img
            className="w-[50px] rounded-lg headerImage h-[50px]"
            src="https://i.ibb.co/NNT3GBS/favicon.jpg"
            alt=""
          />
          <div className="ml-2 uppercase text-black italic font-bold mt-2.5 headerIcon">
            Hotel Booking.com
          </div>
        </div>

        <div className="card m-auto  rounded-none flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div>
            <h1 className="text-3xl text-white text-center">Log In</h1>
          </div>

          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Email"
                className="input input-bordered bg-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Password"
                className="input input-bordered bg-none"
              />
              <Link>
                <span className="text-white hover:underline">
                  Forget Password
                </span>
              </Link>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <Link className="text-white hover:underline" to="/signup">
              New User! Please SignUp First...
            </Link>
          </div>
          <div className=" mx-auto mb-8 ">
            <p className="underline text-center font-mono font-bold">OR</p>
            <div className="flex gap-5 mt-2">
              <BsGoogle className="cursor-pointer text-black text-2xl"></BsGoogle>
              <BsGithub className="cursor-pointer text-black text-2xl"></BsGithub>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

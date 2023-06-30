import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { BsFacebook, BsGoogle } from "react-icons/bs";

const SignUp = () => {
  const { createUser, updateName, googleSingIn, facebookSingIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully SignUp");
        event.target.reset();
        navigate(from, { replace: true });
        displayName(name);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

  const displayName = (name) => {
    updateName(name)
      .then(() => {})
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

  const signInWithFacebook = () => {
    facebookSingIn()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully by Facebook");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

  const signInWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully by Google");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        toast.error(errorMsg);
      });
  };

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
            <h1 className="text-3xl mt-10 text-white  text-center">Sign Up</h1>
          </div>

          <form onSubmit={signUp}>
            <div className="card-body cardBody gap-0 px-16">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-white">
                    Name
                  </span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className="input input-bordered bg-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-white">
                    Email
                  </span>
                </label>

                <input
                  type="email"
                  name="email"
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
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  className="input input-bordered bg-none"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </div>
          </form>
          <div className=" mx-auto mb-3 ">
            <p className="underline mb-4 text-center text-white text-xl font-mono font-bold">
              OR
            </p>
            <div className="flex gap-5 mt-2">
              <div
                onClick={signInWithFacebook}
                className="flex btn btn-primary"
              >
                <BsFacebook className="cursor-pointer text-white text-2xl"></BsFacebook>
                <p>Facebook</p>
              </div>
              <div onClick={signInWithGoogle} className="flex btn btn-primary">
                <BsGoogle className="cursor-pointer text-white text-2xl"></BsGoogle>
                <p className="mr-4">Google</p>
              </div>
            </div>
          </div>
          <Link
            className="text-white text-center mb-8 hover:underline"
            to="/login"
          >
            Already have an Account? Login here...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

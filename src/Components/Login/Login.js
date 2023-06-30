import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signInEmail, googleSingIn, facebookSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInEmail(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully by Email");
        event.target.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        // console.error(errorMsg);
        toast.error(errorMsg);
      }); // console.log(email, password);
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
            className="w-[50px] rounded-lg h-[50px]"
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

          <form onSubmit={signIn}>
            <div className="card-body cardBody gap-0 px-16">
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

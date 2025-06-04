import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";
import { useForm } from "react-hook-form";
import useTitle from "../../Shared/TitleChange/TitleChange";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  useTitle("Login");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { signInEmail, googleSingIn, facebookSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const [loading, setLoading] = useState(false);

  if (token) {
    navigate(from, { replace: true });
  }

  const signIn = (data) => {
    setLoading(true);
    signInEmail(data.email, data.password)
      .then((result) => {
        // eslint-disable-next-line no-unused-vars
        const user = result.user;
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signInWithFacebook = () => {
    facebookSingIn()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully by Facebook");
        const { displayName: name, email } = user;
        fetch("https://hotel-booking-backend-server-skrehad.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, email }),
        })
          .then((res) => res.json())
          .then(() => setLoginUserEmail(email));
      })
      .catch((error) => toast.error(error.message));
  };

  const signInWithGoogle = () => {
    googleSingIn()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully by Google");
        const { displayName: name, email } = user;
        fetch("https://hotel-booking-backend-server-skrehad.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ name, email }),
        })
          .then((res) => res.json())
          .then(() => setLoginUserEmail(email));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <div className="card rounded-none bg-[url('https://i.ibb.co/dkGZY8x/St-Regis-Mauritius-Resort.jpg')] shadow-2xl">
        <div className="flex mx-auto mt-14 mb-8">
          <img
            className="w-[50px] rounded-lg h-[50px]"
            src="https://i.ibb.co/NNT3GBS/favicon.jpg"
            alt=""
          />
          <div className="ml-2 uppercase text-black italic font-bold mt-3">
            Hotel Booking.com
          </div>
        </div>

        <div className="card cardDiv m-auto flex-shrink-0 lg:w-full max-w-sm mb-20 shadow-3xl">
          <h1 className="text-3xl mt-10 text-white text-center">Log In</h1>

          <form onSubmit={handleSubmit(signIn)}>
            <div className="card-body cardBody gap-0 px-16">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-white">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Enter your Email"
                  className="input input-bordered bg-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[18px] text-white">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  placeholder="Enter your Password"
                  className="input input-bordered bg-none"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
                <Link>
                  <span className="text-white hover:underline text-[12px]">
                    Forget Password
                  </span>
                </Link>
              </div>

              {/* Demo Buttons */}
              <div className="flex justify-center gap-4 mt-4 mb-2">
                <button
                  type="button"
                  onClick={() => {
                    setValue("email", "test@gmail.com");
                    setValue("password", "12345678");
                  }}
                  className="btn text-white bg-black"
                >
                  Login as Admin
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setValue("email", "user@gmail.com");
                    setValue("password", "12345678");
                  }}
                  className="btn text-white bg-black"
                >
                  Login as User
                </button>
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-primary" disabled={loading}>
                  {loading ? <Loading></Loading> : "Login"}
                </button>
              </div>
            </div>
          </form>

          <div className="mx-auto mb-3">
            <p className="underline mb-4 text-center text-white text-xl font-mono font-bold">
              OR
            </p>
            <div className="flex gap-5 mt-2 justify-center">
              <div
                onClick={signInWithFacebook}
                className="flex btn btn-primary"
              >
                <BsFacebook className="cursor-pointer text-white text-2xl" />
                <p className="ml-2">Facebook</p>
              </div>
              <div onClick={signInWithGoogle} className="flex btn btn-primary">
                <BsGoogle className="cursor-pointer text-white text-2xl" />
                <p className="ml-2">Google</p>
              </div>
            </div>
          </div>

          <Link
            className="text-white text-center mb-8 hover:underline"
            to="/signup"
          >
            New User? Please Sign Up First...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

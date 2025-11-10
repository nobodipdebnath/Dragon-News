import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const LoginPage = () => {
  const { logInUser, forgotPassword } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  // console.log(location);

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`WelCome ${user.displayName}`);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const emailRef = useRef(null);
  const handelForgot = () => {
    const email = emailRef.current.value;
    console.log(email);
    forgotPassword(email)
    .then(result => {
      console.log(result);
      toast.success('password reset mail send..')
    })
    .catch(error => {
      setError(error.message);
    })
  };

  return (
    <div className="h-screen">
      <div className="card bg-base-100 lg:w-1/2 mx-auto py-10 px-24">
        <h1 className="text-center font-bold text-2xl text-primary">
          Login Your Account
        </h1>
        <div className="h-[1px] w-full bg-gray-200 mt-5"></div>
        <div className="card-body">
          <form onSubmit={handelLogin} className="fieldset">
            <label className="label text-lg font-semibold text-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              required
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Email Address"
            />
            <label className="label text-xl font-semibold text-primary">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Password"
            />
            <div onClick={handelForgot} className="text-green-600 underline mt-3 cursor-pointer">
              Forgot Password
            </div>
            {error && (
              <p className="text-red-600 text-center mt-3">
                Email or Password Wrong Please Try Again !!
              </p>
            )}
            <button className="rounded-md text-lg  cursor-pointer py-3 bg-primary text-white font-semibold mt-8">
              Login
            </button>
          </form>
          <p className="text-center font-medium text-accent text-lg mt-3">
            Don't have an account?{" "}
            <Link
              className="text-secondary font-semibold underline"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

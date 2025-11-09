import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, setUser, upDateProfile } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name === "") {
      setNameError("Name can't blank Please Provide Your Name");
      return;
    } else {
      setNameError("");
    }

    const imageUrl = e.target.photo_url.value;
    // console.log(imageUrl);

    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        upDateProfile({
          displayName: name,
          photoURL: imageUrl,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: imageUrl });
            toast.success("Register Successful! 🎉");
            navigate('/');
          })
          .catch((error) => {
            // console.log(error.message);
            setUser(user);
          });
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Something went wrong! ❌");
      });
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="card bg-base-100 lg:w-1/2 mx-auto py-10 px-24">
        <h1 className="text-center font-bold text-2xl text-primary">
          Register Your Account
        </h1>
        <div className="h-[1px] w-full bg-gray-200 mt-5"></div>
        <div className="card-body">
          <form onSubmit={handelRegister} className="fieldset">
            <label className="label text-lg font-semibold text-primary">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Name"
            />

            {nameError && (
              <p className="text-center text-red-600">{nameError}</p>
            )}

            <label className="label text-lg font-semibold text-primary mt-5">
              Photo URL
            </label>
            <input
              type="text"
              name="photo_url"
              required
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Photo URL"
            />

            <label className="label text-lg font-semibold text-primary mt-5">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Email Address"
            />

            <label className="label text-xl font-semibold text-primary mt-5">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Password"
            />

            <button
              type="submit"
              className="rounded-md text-lg cursor-pointer py-3 bg-primary text-white font-semibold mt-7"
            >
              Register
            </button>
          </form>

          <p className="text-center font-medium text-accent text-lg mt-3">
            You have an account?{" "}
            <Link
              className="text-secondary font-semibold underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

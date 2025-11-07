import { use} from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const imageUrl = e.target.photo_url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;


    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        toast.success("Register Successful! 🎉");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong! ❌");
      });
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="card bg-base-100 w-1/2 mx-auto py-10 px-24">
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

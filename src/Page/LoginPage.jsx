import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const LoginPage = () => {

  const {logInUser} = use(AuthContext);

  const handelLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
    .then(result => {
      const user = result.user;
      alert(`Welcome ${user.displayName}` )
    })
    .catch(error => {
      alert(error.message);
    })

    
  }

  return (
    <div className="h-screen">
      <div className="card bg-base-100 w-1/2 mx-auto py-10 px-24">
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
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Email Address"
            />
            <label className="label text-xl font-semibold text-primary">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full py-4 rounded-md px-5 outline-none bg-base-200"
              placeholder="Enter Your Password"
            />
            <button className="rounded-md text-lg  cursor-pointer py-3 bg-primary text-white font-semibold mt-7">Login</button>
          </form>
          <p className="text-center font-medium text-accent text-lg mt-3">Don't have an account? <Link className="text-secondary font-semibold underline" to='/auth/register'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

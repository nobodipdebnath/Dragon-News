import { Link, NavLink } from "react-router";
import profile from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";


const Navbar = () => {
  const {user, signOutUser} = use(AuthContext);

  const handelSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Success Full");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex items-center justify-between flex-row">
      <div className="text-2xl font-bold text-primary">{user && user.email}</div>
      <div className="flex items-center gap-8 list-none font-semibold text-accent">
        {links}
      </div>
      <div className="flex items-center gap-2">
        <img src={profile} alt="" />
        {
          user ? <button onClick={handelSignOut} className=" px-10 btn btn-primary">Log Out</button> : <Link to='/auth/login'><button className=" px-10 btn btn-primary">Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Navbar;

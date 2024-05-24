import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast from "react-hot-toast";

const NavBar = () => {
  const { googleLogin, user, userSignOut } = useContext(AuthContext);

  //google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((response) => {
        toast.success("Logged In successfully!!!");
        console.log(response.user);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <>
      <div className="flex justify-between items-center px-3 md:px-0">
        <Link to="/" className="text text-2xl">
          <img
            className="w-40 md:w-56"
            src="https://i.ibb.co/4d20rD7/cine-sphere.png"
            alt="logo"
          />
        </Link>
        {user ? (
          <div className="dropdown flex justify-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={`image of ${user?.displayName}`}
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52 p-5 space-y-2 "
            >
              <li className="justify-between">{user?.displayName}</li>
              <li>{user?.email}</li>
              <button
                onClick={userSignOut}
                className="capitalize text-xs bg-gradient-to-r from-[#06286e] to-[#800030] text-white font-bold p-2 rounded-lg"
              >
                Sign Out
              </button>
            </ul>
          </div>
        ) : (
          <button
            onClick={handleGoogleLogin}
            className="capitalize bg-gradient-to-r from-[#06286e] to-[#800030] text-white font-bold p-2 rounded-lg"
          >
            Sign Up
          </button>
        )}
      </div>
      {/*  */}
    </>
  );
};

export default NavBar;

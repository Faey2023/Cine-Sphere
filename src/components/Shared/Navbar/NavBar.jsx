import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../../custom hooks/useAuth";

const NavBar = () => {
  const { googleLogin, user, userSignOut } = useAuth();

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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                to="/allMovie"
                className="text-xl cursor-pointer hover:underline"
              >
                All Movies
              </Link>
              {user ? (
                <Link
                  to="/fav"
                  className="text-xl cursor-pointer hover:underline"
                >
                  Favorites
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <Link to="/" className="text text-2xl">
            <img
              className="w-40 md:w-56"
              src="https://i.ibb.co/4d20rD7/cine-sphere.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-10">
            <Link
              to="/allMovie"
              className="text-xl cursor-pointer hover:underline"
            >
              All Movies
            </Link>
            {user ? (
              <Link
                to="/fav"
                className="text-xl cursor-pointer hover:underline"
              >
                Favorites
              </Link>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="navbar-end">
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
      </div>
    </>
  );
};

export default NavBar;

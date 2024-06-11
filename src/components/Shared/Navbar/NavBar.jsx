import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Link to="/" className="text text-2xl">
          <img
            className="w-56"
            src="https://i.ibb.co/4d20rD7/cine-sphere.png"
            alt="logo"
          />
        </Link>

        <Link className="capitalize bg-gradient-to-r from-[#06286e] to-[#800030] text-white font-bold p-2 rounded-lg">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default NavBar;

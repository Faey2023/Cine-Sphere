import { Link, Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <main className=" max-w-screen-xl mx-auto my-5">
      <Link to="/" className="text text-2xl">
        <img
          className="w-56"
          src="https://i.ibb.co/4d20rD7/cine-sphere.png"
          alt="logo"
        />
      </Link>
      <Outlet />
    </main>
  );
};

export default MainPage;

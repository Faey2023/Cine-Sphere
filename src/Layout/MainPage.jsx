import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/NavBar";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto my-5">
        <NavBar />
      </main>
      <Outlet />
      <Toaster />
    </>
  );
};

export default MainPage;

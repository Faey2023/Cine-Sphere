import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/NavBar";

const MainPage = () => {
  return (
    <main className=" max-w-screen-xl mx-auto my-5">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default MainPage;

import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/Navbar/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Shared/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <main className="max-w-screen-xl mx-auto my-5">
        <NavBar />
      </main>
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default MainPage;

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./Layout/MainPage";
import Home from "./Page/Home/Home";
import AllMovie from "./Page/Movies/AllMovie";
import MovieDetail from "./Page/Movies/MovieDetail";
import AuthProvider from "./Provider/AuthProvider";
import Favorites from "./Page/Favorites/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allMovie",
        element: <AllMovie />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/fav",
        element: <Favorites />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);

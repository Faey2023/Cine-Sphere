import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./Layout/MainPage";
import Home from "./Page/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import { createBrowserRouter } from "react-router-dom";
import GameDetails from "../pages/GameDetails";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;

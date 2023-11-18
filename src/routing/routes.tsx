import { createBrowserRouter } from "react-router-dom";
import GameDetails from "../pages/GameDetails";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);

export default router;

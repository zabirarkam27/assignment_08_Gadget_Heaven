import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./../Pages/Home";
import Dashboard from "./../Pages/Dashboard";
import Statistics from "./../Pages/Statistics";
import GadgetCards from "../components/GadgetCards";
import GadgetDetails from "../components/GadgetDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards />,
            loader: () => fetch("/gadgets.json"),
          },
          {
            path: "/category/:category",
            element: <GadgetCards />,
            loader: () => fetch("/gadgets.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/gadget/:id",
        element: <GadgetDetails />,
        loader: () => fetch("/gadgets.json"),
      },
    ],
  },
]);

export default routes;

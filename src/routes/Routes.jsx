import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from './../Pages/Home';
import Dashboard from './../Pages/Dashboard';
import Statistics from "./../Pages/Statistics";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/statistics',
                element:<Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },

        ],
    },
]);

export default routes;
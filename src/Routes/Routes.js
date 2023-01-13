import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <Home></Home>
            },
            {
                path: '/reviews',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Home></Home>
            },
            {
                path: '/make',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;
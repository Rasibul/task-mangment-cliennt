import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Task from "../Pages/Task";
import Profile from "../Pages/Profile";

const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/tasks',
                element: <Task></Task>
            },
            {
                path: '/profile-page',
                element: <Profile></Profile>
            }
        ]
    },

])

export default route
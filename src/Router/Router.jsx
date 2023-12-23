import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Task from "../Pages/Task";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashbord from "../Pages/DashBord/Dashbord";
import CreateTask from "../Pages/DashBord/Pages/CreateTask/CreateTask";
import ToDoList from "../Pages/DashBord/Pages/ToDoList/ToDoList";

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

    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },

    // dashbord
    {
        path:'dashbord',
        element:<Dashbord></Dashbord>,
        children:[
            {
                path:'create-task',
                element:<CreateTask></CreateTask>
            },
            {
                path:'to-do-list',
                element:<ToDoList></ToDoList>,
                 loader: () => fetch(`http://localhost:5000/api/v1/all-task`)
            }
        ]
    }

])

export default route
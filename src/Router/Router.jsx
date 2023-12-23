import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashbord from "../Pages/DashBord/Dashbord";
import CreateTask from "../Pages/DashBord/Pages/CreateTask/CreateTask";
import ToDoList from "../Pages/DashBord/Pages/ToDoList/ToDoList";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import OnGoing from "../Pages/DashBord/Pages/OnGoing";
import Completed from "../Pages/DashBord/Pages/Completed";

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
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
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
            },
            {
                path:'on-going',
                element:<OnGoing></OnGoing>
            },
            {
                path:'completed',
                element:<Completed></Completed>
            },
        ]
    }

])

export default route
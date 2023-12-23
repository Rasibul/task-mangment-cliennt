import { FaCartPlus, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hook/useAuth";


const Dashbord = () => {
    const { user } = useAuth()

    return (
        <div className="flex flex-col lg:flex-row min-h-screen  ">
            {/* Sidebar */}
            <div className="lg:w-1/4 bg-orange-700 p-4 text-white">
                <h1 className="text-2xl font-bold text-white mb-4">Dashboard</h1>
                <div className="flex justify-center items-center gap-5">
                    <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
                    <h2>{user?.displayName}</h2>
                </div>
                <ul className="menu">
                    <li>
                        <NavLink to='/dashbord/create-task'>
                            <FaCartPlus></FaCartPlus>
                            Create Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashbord/to-do-list'>
                            <FaCartPlus></FaCartPlus>
                            Todo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/on-going'>
                            <FaCartPlus></FaCartPlus>
                            On Going
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/completd'>
                            <FaHome></FaHome>
                            Completed
                        </NavLink>
                    </li>
                    <div className="divider bg-white"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 p-4">
                {/* Add main content components */}
                <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your Dashboard</h2>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setSticky(offset > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/tasks", label: "Task" },
        { path: "/profile-page", label: "Profile Page" },
    ];

    const renderNavLinks = navLinks.map((link) => (
        <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
        </li>
    ));

    return (
        <header className={`fixed top-0 right-0 left-0 transition-all duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ${isSticky ? "shadow-md" : ""}`}>
            <div className="max-w-screen-2xl container mx-auto">
                <div className={`navbar xl:px-24 ${isSticky ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" : "transition-all duration-300"}`}>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500rounded-box w-52">
                                {renderNavLinks}
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <h2 className="text-lg sm:text-3xl font-bold text-white">
                                <span className="text-xl sm:text-3xl font-bold italic">TaskFlow</span>Hub
                            </h2>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{renderNavLinks}</ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.email ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <button className="btn btn-sm  btn-ghost">{user?.displayName}</button>

                                    </li>
                                    <li>
                                        <button className="btn btn-sm  btn-ghost" onClick={logOut}>Logout</button>
                                    </li>
                                    <li>
                                        <Link to='/dashbord'>
                                            <button className="btn btn-sm btn-ghost">DashBord</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to='/login'>
                                    <button className="btn btn-sm  btn-ghost">Login</button>
                                </Link>

                        }

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Shared/NavBar";


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;
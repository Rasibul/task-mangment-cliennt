import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Shared/NavBar";
import { Toaster } from "react-hot-toast";


const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayOut;
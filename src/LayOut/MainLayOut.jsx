import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Shared/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../Components/Footer/Footer";


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
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;
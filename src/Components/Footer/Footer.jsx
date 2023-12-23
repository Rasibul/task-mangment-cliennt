import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
            <aside>
                <div className="flex items-center  ">
                    {/* <img className="w-12 sm:w-10 rounded-full" src="https://i.ibb.co/nj4JXDP/logo.png" alt="" /> */}
                    <h2 className="font-bold italic text-center">TaskFlowHub</h2>
                </div>
                <p>Task Mangment Ltd.<br />Helpful And Coo-operative Task Mangment Site </p>
            </aside>
            <nav>
                <header className="footer-title">NavLinks</header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </div>
            </nav>
            <div className="">
                <h2>Contact Us: 4455886623</h2>
                <p>BayZid Chittagong</p>
            </div>
        </footer>

    );
};

export default Footer;
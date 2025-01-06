import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Shared/Navbar/Navbar";
import { Footer } from "../Shared/Footer/Footer";

export const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup")
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar> }
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};
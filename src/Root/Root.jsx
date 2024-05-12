import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className="mx-auto max-w-7xl workSans">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
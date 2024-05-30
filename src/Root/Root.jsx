import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <div className="mx-auto  workSans">
            <Navbar></Navbar>
            <div className="mx-auto max-w-[1440px] ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
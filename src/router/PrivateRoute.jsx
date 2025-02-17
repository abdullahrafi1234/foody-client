import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className="text-center">
            <span className="loading loading-spinner text-accent text-center"></span>
        </div>
    }

    if(user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace={true} ></Navigate>
};

export default PrivateRoute;
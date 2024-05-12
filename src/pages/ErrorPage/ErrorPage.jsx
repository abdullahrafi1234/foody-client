import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (


        <div className="font-poppins text-center items-center mx-auto max-w-xl mt-36 space-y-4  p-20 ">

            <h3 className="text-6xl font-extrabold text-green-700">Oops!</h3>
            <div>
                <img src="404.avif" alt="" />
            </div>


            
            <p className="font-semibold ">Sorry, the page you are looking for could not be found !</p>
            <Link className="btn btn-success btn-outline rounded-xl" to={'/'}>Back to Home</Link>

            <Helmet>
                <title>Foody | ErrorPage</title>
            </Helmet>




        </div>

    );
};

export default ErrorPage;
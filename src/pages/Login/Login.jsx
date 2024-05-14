import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password,);

        loginUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    title: 'Error!',
                    text: 'Please Write Your Correct Gmail and Password!!!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                // console.log(result.user)
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="">
            <Helmet>
                <title>Foody | Login</title>
            </Helmet>

            <div className=" text-center md:items-center lg:items-start flex flex-col lg:flex-row gap-2 ">
                <div className=" items-center justify-center text-center lg:text-left lg:w-1/2 rounded-lg">

                    <div className=" items-center justify-center text-center py-16">
                        <img className='rounded-2xl lg:w-[900px] lg:h-[700px] md:h-[400px] md:w-[300px] w-[300px]' src='login food.jpeg' alt="" />
                    </div>
                </div>
                <div className="card shrink-0 lg:w-1/2 p-8 py-20">
                    <h1 className="text-4xl font-semibold text-center">Log In</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white bg-green-700">Login</button>
                        </div>

                        <p className='text-center pt-3'>Don't have an account?<Link to={'/register'}> <span className='text-green-500 font-bold'>Create an account</span></Link> </p>
                    </form>

                    <div className="flex  text-center justify-center items-center  ">
                        <p className="border-b "></p>
                        <p className="border-b-2 border-green-400">or</p>
                        <p className="border-b"></p>
                    </div>



                    <div className="form-control mt-2 px-8">
                        <button onClick={handleGoogleLogin} className="btn btn-outline  mt-4 px-8"> <FcGoogle className="text-3xl"></FcGoogle> Google Login</button>
                    </div>


                    <div className="form-control mt-2 px-8">
                        <button className="btn btn-outline  "> <FaFacebook className="text-3xl text-blue-700"></FaFacebook> Facebook Login</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
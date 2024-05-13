import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate()

    const {createUser} = useContext(AuthContext)

    const [error, setError] = useState('')

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('')

        if (password.length < 6) {
            setError('Password must have 6 Character!!!')
            return
        }

        // create user
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/')
            Swal.fire({
                title: 'Success!',
                text: 'Created Your Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })

        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className=" ">
             <Helmet>
                <title>Foody | Register</title>
            </Helmet>

            <div className=" text-center md:items-center lg:items-start flex flex-col lg:flex-row gap-2 ">
                <div className=" items-center justify-center text-center lg:text-left lg:w-1/2 rounded-lg">

                    <div className=" items-center justify-center text-center py-16">
                        <img className='rounded-2xl lg:w-[900px] lg:h-[650px] md:h-[400px] md:w-[300px] w-[300px]' src='login food.jpeg' alt="" />
                    </div>
                </div>
                <div className="card shrink-0 lg:w-1/2 p-8 py-20">
                    <h1 className="text-3xl font-semibold text-center">Create Your Account!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>

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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white bg-green-600">Register</button>
                        </div>
                        <p className="text-red-600 text-center">{error}</p>


                        <p className='text-center pt-3'>Already have an account?<Link to={'/login'}> <span className='text-green-500 font-bold'>Please Login</span></Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    // const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState('light')
    // console.log(theme);

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleTheme = e => {
        if (e.target.checked) {
            setTheme('dark')
            // console.log(e.target.value)
        }
        else {
            setTheme('light')
        }
    }

    // const handleLogOut = () => {
    //     logOut()
    //         .then()
    //         .catch()
    // }

    const navLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-semibold' : 'btn font-medium btn-ghost'} to={'/'}>Home</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-semibold' : 'btn font-medium btn-ghost'} to={'/available-food'}>Available Food</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-semibold' : 'btn font-medium btn-ghost'} to={'/add-food'}>Add Food</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-semibold' : 'btn font-medium btn-ghost'} to={'/my-foods'}>My Foods</NavLink></li>

        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success font-semibold' : 'btn font-medium btn-ghost'} to={'/my-food-request'}>My Food Request</NavLink></li>

        {/* {
            user ? <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li> : ''
        } */}

        {/* <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li> */}
        {/* {
            !user ? <li><NavLink to={'/register'}>Register</NavLink></li> : ''
        } */}
    </>

    return (
        <div className="navbar lg:px-8 rounded-b-lg shadow-lg  py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-3 justify-center">
                    <p><img className="w-10" src="logo food.png" alt="" /></p>

                    <div className=" workSans text-3xl text-green-800 font-bold gap-0">
                        <Link to={'/'} className="gap-0 items-center">
                            F<span className="text-red-500">OO</span>DY
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {/* theme part */}
                <div className="p-4">
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleTheme} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>


                <div className="">
                    <Link className="btn btn-success rounded-xl bg-green-700 text-white border-none" to={'/login'}>Login</Link>
                </div>

                {/* {
                    user ?

                        <div className="dropdown dropdown-hover mr-8">
                            <div tabIndex={0} role="button" className=" hover m-1">
                                <img className="w-12 rounded-full" src={user?.photoURL || 'user.png'} alt="" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-lg w-[120px]">
                                <li>{user?.displayName || 'Name Not Found'}</li>
                                <li><button onClick={handleLogOut} className=" rounded-xl bg-[#38bdf8] text-white border-none">Log Out</button></li>
                            </ul>
                        </div>
                        :
                        <div className="">
                            <Link className="btn btn-success rounded-xl bg-green-700 text-white border-none" to={'/login'}>Login</Link>
                        </div>
                } */}
            </div>
        </div>
    );
};

export default Navbar;
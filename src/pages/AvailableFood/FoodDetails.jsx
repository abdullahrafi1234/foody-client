import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { IoLocationOutline } from 'react-icons/io5';

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData()
    console.log(food)
    const { foodName, quantity, location, date, notes, status, photo, } = food

    return (
        <div className='my-16 mb-32'>
            <Helmet>
                <title>Foody | ViewDetails</title>
            </Helmet>

            <div>
                <p className="text-center font-bold text-3xl pb-4"> <span className='text-red-500'>Donar</span> Information </p>

                <div className='space-y-3 flex flex-col justify-center items-center '>
                    <p className="  pb-4">
                        <img className=" w-36 rounded-full" src={user?.photoURL || 'user.png'} alt="" />
                    </p>

                    <p className="font-bold ">Name: {user?.displayName || 'Name Not Found'}</p>

                    <p className="font-bold pb-12">Email: {user?.email}</p>
                </div>
                <div className="mt-12 mb-16 lg:p-0 p-8">
                    <div className=" flex-col lg:flex-row">

                        <h1 className="text-3xl py-2 font-bold">Food Name: {foodName}</h1>

                        <div className="bg-[#1313130D mt-8  rounded-lg text-center ">
                            <img src={photo} className=" text-center lg:w-[800px] md:w-[600px] lg:h-[500px] md:h-[400px] h-[200px] rounded-lg " />
                        </div>

                        <div className="w-3/4 mt-16   text-start">

                            <h1 className="text-2xl font-bold">More About :</h1>
                            <p className="py-4 font-medium flex gap-2" > <span className="font-bold">Location: </span>{location} <IoLocationOutline className="text-xl"></IoLocationOutline> </p>

                            {/* <p className="font-semibold border-y border-gray-300 py-3 pl-8">Status : {status}</p> */}

                            <p className="font-semibold border-y border-gray-300 py-3 pl-8 text-[#23BE0A] px-6   ">Status: {food.status}</p>

                            <p className="py-4 pb-4"> <span className="font-bold">More About : </span>{notes}</p>

                            <p className="">Food Quantity: <span className="font-semibold">{quantity}</span></p>
                            <p className="">Expired Date: <span className="font-semibold">{date}</span></p>

                            <div className='mt-4'>
                                <Link >
                                    <button className='btn btn-success btn-outline'>Food Request</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
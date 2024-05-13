import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { IoLocationOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';

const FoodDetails = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData()
    // console.log(food)
    const { foodName, quantity, location, date, notes, status, photo, _id, email, name, userImage } = food;

    const handleRequest = e => {
        e.preventDefault()
        const form = e.target;
        const additionalNotes = form.additionalNotes.value;
        const newStatus = 'Requested'
        const foodId = _id
        const request = { foodName, quantity, location, date, additionalNotes, newStatus, photo, foodId, email, name, userImage }
        console.log(request)


        fetch('http://localhost:5000/request', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className='my-16 mb-32'>
            <Helmet>
                <title>Foody | ViewDetails</title>
            </Helmet>

            <div>
                <p className="text-center font-bold text-3xl pb-4"> <span className='text-red-500'>Donar</span> Information </p>

                <div className='space-y-3 flex flex-col justify-center items-center '>
                    <p className="  pb-4">
                        <img className=" w-36 rounded-full" src={userImage} alt="" />
                    </p>

                    <p className="font-bold ">Name: {name || 'Name Not Found'}</p>

                    <p className="font-bold pb-12">Email: {email}</p>
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


                            <p className="font-semibold border-y border-gray-300 py-3 pl-8 text-[#23BE0A] px-6   ">Status: {food.status}</p>

                            <p className="py-4 pb-4"> <span className="font-bold">More About : </span>{notes}</p>

                            <p className="">Food Quantity: <span className="font-semibold">{quantity}</span></p>
                            <p className="">Expired Date: <span className="font-semibold">{date}</span></p>



                            {/* Open the modal using document.getElementById('ID').showModal() method */}

                            <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                <div className='mt-4'>
                                    <Link >
                                        <button className='btn btn-success btn-outline'>Food Request</button>
                                    </Link>
                                </div>
                            </button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    {/* form part */}
                                    <div className='space-y-3 flex flex-col items-center'>
                                        <p className=" mx-auto pb-4">
                                            <img className=" w-64 rounded-full" src={photo} alt="" />
                                        </p>

                                        <p className="font-medium ">Donator Name: {name || 'Name Not Found'}</p>

                                        <p className="font-medium pb-4">Donator Email: {email}</p>
                                    </div>
                                    <form onSubmit={handleRequest}>
                                        {/* name, quantity  */}
                                        <div className="md:flex gap-10  ">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">

                                                    <span className="label-text">Food Name</span>
                                                </label>
                                                <label className="input-group ">
                                                    <input type="text"
                                                        value={foodName}
                                                        readOnly
                                                        name="foodName" placeholder="Food Name" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                            <div className="form-control md:w-1/2">
                                                <label className="label">

                                                    <span className="label-text">Food Id</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text"
                                                        value={_id}
                                                        readOnly
                                                        name="quantity" placeholder="Food Quantity" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        {/* location, date */}
                                        <div className="md:flex gap-10  ">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">

                                                    <span className="label-text">Pickup Location</span>
                                                </label>
                                                <label className="input-group ">
                                                    <input type="text"
                                                        value={location}
                                                        readOnly
                                                        name="location" placeholder="Pickup Location" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                            <div className="form-control md:w-1/2">
                                                <label className="label">

                                                    <span className="label-text">Request Date</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="date"
                                                        value={date}
                                                        readOnly
                                                        name="date" placeholder="" className="input input-bordered w-full" />
                                                </label>
                                            </div>

                                        </div>
                                        {/* note,status */}
                                        <div className="md:flex gap-10  ">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">

                                                    <span className="label-text">User Email</span>
                                                </label>
                                                <label className="input-group ">
                                                    <input type="text"
                                                        value={user?.email}
                                                        readOnly
                                                        name="notes" placeholder="Additional Notes" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                            <div className="form-control md:w-1/2">
                                                <label className="label">

                                                    <span className="label-text">Expired Date</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text"

                                                        name="status" value={date}
                                                        readOnly placeholder="Food Status" className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                        </div>
                                        {/* photo */}
                                        <div>
                                            <div className="form-control md:w-full">
                                                <label className="label">

                                                    <span className="label-text">Additional Notes</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text"
                                                        name="additionalNotes" placeholder="Write Your Notes" defaultValue={notes} className="input input-bordered w-full" />
                                                </label>
                                            </div>
                                        </div>

                                        {/* btn */}

                                        <div className="mt-8">
                                            <input className="btn  btn-success btn-block text-white " type="submit" value="Request" />

                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-lg btn-circle  absolute right-2 top-2">✕</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
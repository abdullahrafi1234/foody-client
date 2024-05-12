import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const AddFood = () => {
    const { user } = useContext(AuthContext)


    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const status = form.status.value;
        const photo = form.photo.value;
        const name = user?.displayName || 'Name Not Found'
        const email = user.email

        const addFood = { foodName, quantity, location, date, notes, status, photo, name, email}

        fetch('http://localhost:5000/addFood',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(addFood)
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }

    return (
        <div className="lg:mt-16 md:mt-28 lg:px-20 mt-28 mb-32 bg-sky-100">
            <div className=" p-24">
                <h3 className="text-3xl font-bold text-center mb-6">Add Your Food</h3>


                <div className='space-y-3'>
                    <p className=" mx-auto pb-4">
                        <img className=" w-36 rounded-full" src={user?.photoURL || 'user.png'} alt="" />
                    </p>

                    <p className="font-medium ">Name: {user?.displayName || 'Name Not Found'}</p>

                    <p className="font-medium pb-12">Email: {user?.email}</p>
                </div>

                <form onSubmit={handleAddFood}>
                    {/* name, quantity  */}
                    <div className="md:flex gap-10  ">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="foodName" placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Food Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
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
                                    name="location" placeholder="Pickup Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Expired Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date"
                                    name="date" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    {/* note,status */}
                    <div className="md:flex gap-10  ">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Additional Notes</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="notes" placeholder="Additional Notes" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Food Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="status" readOnly value={'Available'} placeholder="Food Status" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* photo */}
                    <div>
                        <div className="form-control md:w-full">
                            <label className="label">

                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* btn */}

                    <div className="mt-8">
                        <input className="btn  btn-block bg-black text-white " type="submit" value="Add Tourist Spot" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const UpdateFood = () => {
    const { user } = useContext(AuthContext)
    const food = useLoaderData()
    // console.log(food)
    const { foodName, quantity, location, date, notes, status, photo, name, email, userImage, _id } = food;

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const status = form.status.value;
        const photo = form.photo.value;
        const email = user?.email

        const updateFood = { foodName, quantity, location, date, notes, status, photo, email, }
        // console.log(updateFood)

        fetch(`https://eleven-assignment-server-mu.vercel.app/addFood/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateFood)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Foods Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset()
                

            })


    }

    return (
        <div className="lg:mt-16 md:mt-28 lg:px-20 mt-28 mb-32 bg-sky-100 rancho">

            <Helmet>
                <title>Foody | Update Food </title>
            </Helmet>
            <div className=" p-24">
                <h3 className="text-3xl font-bold text-center mb-6 uppercase">Update Your <span className='text-green-700'> F<span className='text-red-500'>oo</span>d</span></h3>

                <form onSubmit={handleUpdate}>
                    {/* name, quantity  */}
                    <div className="md:flex gap-10  ">
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Food Name</span>
                            </label>
                            <label className="input-group ">
                                <input type="text"
                                    name="foodName" defaultValue={foodName} placeholder="Food Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Food Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" defaultValue={quantity}
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
                                <input type="text" defaultValue={location}
                                    name="location" placeholder="Pickup Location" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Expired Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" defaultValue={date}
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
                                <input type="text" defaultValue={notes}
                                    name="notes" placeholder="Additional Notes" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">

                                <span className="label-text">Food Status</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="status" value={'Available'}
                                    readOnly placeholder="Food Status" className="input input-bordered w-full" />
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
                                <input type="text" defaultValue={photo}
                                    name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* btn */}

                    <div className="mt-8">
                        <input className="btn  btn-success btn-block text-white " type="submit" value="Update Food" />

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;
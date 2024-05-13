import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";


const FeaturedFood = ({ food }) => {
    const { user } = useContext(AuthContext)
    // console.log(food)
    return (
        <div>
            <div className="my-4">
                <div className="card bg-base-100 shadow-xl ">
                    <div className='px-10 pt-4 flex gap-4 items-center'>
                        <img className='w-12 rounded-full' src={food.userImage || 'user.png'} alt="" />
                        <p className='font-semibold'>{food.name}
                            {/* <p className='font-normal'>{food.date}</p> */}
                        </p>

                    </div>

                    <figure className="px-10 pt-2">
                        <div className="bg-[#F3F3F3] w-96  rounded-xl">
                            <img src={food.photo} alt="Shoes" className="rounded-xl w-96 lg:h-60 md:h-52" />
                        </div>
                    </figure>

                    <div className="pl-14 flex pt-8 gap-8">
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">Status: {food.status}</p>
                    </div>
                    <div className=" py-4  pl-14">
                        <h2 className="text-xl font-bold">{food.foodName}</h2>
                    </div>
                    <div className="flex pl-14  pr-14 justify-between ">
                        <p className=""> <span className="font-medium">Food Quantity : </span> {food.quantity}</p>
                    </div>

                    <div className="flex pl-14  pr-14 justify-between ">
                        <p className=""> <span className="font-medium"> Location : </span> {food.location}</p>
                    </div>

                    <div className="flex pl-14  pr-14 justify-between pb-2 ">
                        <p className=""> <span className="font-medium">Expired Date : </span> {food.date}</p>
                    </div>
                    <div className=" pl-14  pr-4 justify-between pb-2">
                        <div>
                            {
                                food.notes.length > 70 ?
                                    <p> <span className="font-bold">Notes:</span> {food.notes.slice(0, 70)}..... </p> :
                                    <p>{food.notes}</p>

                            }
                        </div>
                    </div>

                    <Link to={`/food-details/${food._id}`} className='text-red-400 font-medium pl-14 py-2 pb-8'>
                        <button className="btn btn-outline btn-success">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default FeaturedFood;
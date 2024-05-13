import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/addFoods/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFoods(data)
            })
    }, [user])


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            // text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/addFood/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Food Item has been deleted.",
                                icon: "success"
                            });
                            // remove from ui 

                            const remaining = foods.filter(food => food._id !== _id)
                            setFoods(remaining)
                        }
                    })
            }
        });
    }



    return (
        <div className="mt-12 mb-24">
             <Helmet>
                <title>Foody | My Foods </title>
            </Helmet>
            <h3 className="text-4xl text-center font-bold mb-8 mt-20 md:mt-20 lg:mt-12">Total Foods You Added: {foods.length}</h3>


            <div className="px-8 border rounded-lg mt-8">
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white m-4">
                                <th className="text-center font-bold text-base bg-green-700 rounded-lg">Image</th>

                                <th className="text-center font-bold text-base bg-[#2dd4bf] rounded-lg">Name</th>
                                <th className="text-center font-bold text-base bg-[#3b82f6] rounded-lg">Location</th>
                                <th className=" text-center font-bold text-base bg-[#f97316] rounded-lg">Date</th>
                                <th className=" text-center font-bold text-base bg-black rounded-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}


                            {
                                foods.map(food => <tr key={food._id}>
                                    <td className="text-center "><div className="flex justify-center pr-0 text-center">
                                        <img className="w-20 rounded-full" src={food.photo} alt="Avatar Tailwind CSS Component" />
                                    </div></td>

                                    <td className="text-center">{food.foodName}</td>

                                    <td className="text-center">{food.location}</td>
                                    <td className="text-center">{food.date}</td>

                                    <td className="text-center">
                                        <div className="flex justify-evenly space-x-2">
                                            <Link to={`/update-food/${food._id}`}>
                                                <button>
                                                    Update
                                                </button>
                                            </Link>
                                            {/* <Link >
                                                <button>
                                                    Update
                                                </button>
                                            </Link> */}

                                            <Link>
                                                {/* <button>X</button> */}
                                                <button onClick={() => handleDelete(food._id)}>
                                                    X
                                                </button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyFoods;
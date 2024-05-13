import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";


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

    return (
        <div>
            <h3>table</h3>


            <div className="px-8 border rounded-lg mt-8">
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white">
                                <th className="text-center font-bold text-base bg-[#2dd4bf] rounded-lg">Name</th>
                                <th className="text-center font-bold text-base bg-[#3b82f6] rounded-lg">Location</th>
                                <th className=" text-center font-bold text-base bg-[#f97316] rounded-lg">Average Cost</th>
                                <th className=" text-center font-bold text-base bg-black rounded-lg">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            

                            {
                                foods.map(food => <tr key={food._id}>
                                    <td className="text-center">{food.foodName}</td>
                                    <td className="text-center">{food.location}</td>
                                    <td className="text-center">{food.date}</td>

                                    <td className="text-center">
                                        <div className="flex justify-evenly space-x-2">
                                            {/* <Link to={`/update/${list._id}`}>
                                                <button>
                                                    Update
                                                </button>
                                            </Link> */}
                                            <Link >
                                                <button>
                                                    Update
                                                </button>
                                            </Link>

                                            <Link>
                                            <button>X</button>
                                                {/* <button onClick={() => handleDelete(list._id)}>
                                                    X
                                                </button> */}
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
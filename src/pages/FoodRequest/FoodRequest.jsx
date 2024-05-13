import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const FoodRequest = () => {

    const { user } = useContext(AuthContext)
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/request/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFoods(data)
            })
    }, [user])

    return (
        <div>

            <div className="mt-12 mb-24">
             <Helmet>
                <title>Foody | My Food Request </title>
            </Helmet>
            <h3 className="text-4xl text-center font-bold mb-8 mt-20 md:mt-20 lg:mt-12">Requested Food: {foods.length}</h3>


            <div className="px-8 border rounded-lg mt-8">
                <div className="overflow-x-auto p-4">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-white m-4">
                               

                                <th className="text-center font-bold text-base bg-[#2dd4bf] rounded-lg">Name</th>
                                <th className="text-center font-bold text-base bg-[#3b82f6] rounded-lg">Location</th>
                                <th className=" text-center font-bold text-base bg-[#f97316] rounded-lg">Expire Date</th>
                                <th className=" text-center font-bold text-base bg-[#ef1106] rounded-lg">Request Date</th>
                                <th className=" text-center font-bold text-base bg-black rounded-lg">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                foods.map(food => <tr key={food._id}>
                                   
                                    <td className="text-center">{food.foodName}</td>

                                    <td className="text-center">{food.location}</td>
                                    <td className="text-center">{food.date}</td>
                                    <td className="text-center">{food.date}</td>
                                    <td className="text-center">{food?.amount ||'00'} $</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default FoodRequest;
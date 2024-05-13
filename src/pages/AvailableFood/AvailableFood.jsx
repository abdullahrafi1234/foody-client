import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import FoodsCard from './FoodsCard';
import { Helmet } from 'react-helmet-async';

const AvailableFood = () => {
    const foods = useLoaderData()
    console.log(foods)

    const { user } = useContext(AuthContext)

    return (
        <div className='mb-24'>
            <Helmet>
                <title>Foody | Available Food</title>
            </Helmet>
            <div className="mt-20 text-center space-y-4 mb-6">

                <h3 className="text-4xl text-center font-bold">Available Food Dishes</h3>
              
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    foods.filter(f => f.status === 'Available').map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;
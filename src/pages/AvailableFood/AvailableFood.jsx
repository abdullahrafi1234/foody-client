import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import FoodsCard from './FoodsCard';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const AvailableFood = () => {
    // const foods = useLoaderData()
    // console.log(foods)
    const { user } = useContext(AuthContext)

    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState([])

    useEffect(() => {
        axios.get('https://eleven-assignment-server-mu.vercel.app/addFood')
            .then(res => {
                setFoods(res.data)
                setSearch(res.data)
            })
    })


    const [layout, setLayout] = useState(true)

    const handleLayout = () => {
        setLayout(!layout)
    }


    const handleSort = (sort) => {
        if (sort === 'date') {
            const sortedDate = search.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
            console.log(sortedDate)
            setSearch(sortedDate)
        }
    }


    const handleDescend = (descend) => {
        if (descend === 'date') {
            const sortedDate = search.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
            console.log(sortedDate)
            setSearch(sortedDate)

        }
    }


    const handleSearch = (e) => {
        setSearch(foods.filter(f => f.foodName.toLowerCase().includes(e.target.value)))
    }


    return (
        <div className='mb-24'>
            <Helmet>
                <title>Foody | Available Food</title>
            </Helmet>
            <div className="mt-20 text-center space-y-4 mb-6">

                <h3 className="text-4xl text-center font-bold">Available Food Dishes</h3>

            </div>

            {/* sort search */}
            <div className='container px-6 py-6 mx-auto  flex flex-col justify-between'>
                <div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>

                        <form>
                            <div className='flex p-1 
                            
                            overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                                <input
                                    className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                    type='text'
                                    name='search'
                                    placeholder='Enter Food Name'
                                    aria-label='Enter Job Title'
                                />

                                <button onChange={handleSearch} className='px-3 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-500 focus:bg-green-600 focus:outline-none'>
                                    Search
                                </button>
                            </div>
                        </form>
                        {/* <div>
                            <select
                                name='category'
                                id='category'
                                className='border p-4 rounded-md'
                            >
                                <option value=''>Sort By Expired Date</option>
                                <option onClick={() => { handleDescend('date') }} value='dsc'>Descending Order</option>
                                <option onClick={() => { handleSort('date') }} value='asc'>Ascending Order</option>
                            </select>
                        </div> */}
                        <button></button>

                        <div className="flex-none">
                            <ul className="menu menu-horizontal px-1">
                                <li>
                                    <details>
                                        <summary>
                                            Sort
                                        </summary>
                                        <ul className="p-2 bg-base-100 rounded-t-none">
                                            <li onClick={() => { handleDescend('date') }}><a>Dsc</a></li>


                                            <li onClick={() => { handleSort('date') }}><a>Asc</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>

                        {/* <button className='btn btn-success btn-outline'>Reset</button> */}


                        {
                            layout ? <button onClick={handleLayout} className='btn btn-success btn-outline'>Two Card</button> : <button onClick={handleLayout} className='btn btn-success btn-outline'>Three Card</button>
                        }


                    </div>
                    {/* hudai mt */}
                    <div className='grid grid-cols-1 gap-8 mt-0 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    </div>
                </div>

            </div>


            <div className={layout ? 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8' : 'grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-24'}>
                {/* {
                    foods.filter(f => f.status === 'Available').map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                } */}
                {
                    search.map(food => food.status === 'Available' ? <FoodsCard key={food._id} food={food}></FoodsCard> : '')
                }
            </div>
        </div>
    );
};

export default AvailableFood;
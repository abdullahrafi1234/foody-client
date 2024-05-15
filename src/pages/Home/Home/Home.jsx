import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import ExtraOne from "../ExtraOne/ExtraOne";
import ExtraTwo from "../ExtraTwo/ExtraTwo";
// import { Lottie } from 'lottie-react';
// import animationData from './path/to/your/animation.json';
import { motion } from "framer-motion"

const Home = () => {
    const foods = useLoaderData()
    // console.log(foods)
    return (
        <div>
            <Helmet>
                <title>Foody </title>
            </Helmet>
            {/* <div>
                <Lottie
                    animationData={animationData}
                    loop
                    autoplay
                />
            </div> */}

            <Banner></Banner>
            <div className="mt-24 mb-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -100 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Animate to this state
                    transition={{ duration: 1 }} // Animation duration
                >
                     <h3 className="text-4xl text-center font-bold ">Our Popular Dishes</h3>
                </motion.div>
               
                <p>Feature your on-site dining options, whether its a gourmet <br /> restaurant, cozy café, or stylish bar, focusing on the culinary delights and ambiance.</p>

            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    foods.filter(f => f.quantity === '70').slice(0, 6).map(food => <FeaturedFood key={food._id} food={food}></FeaturedFood>)
                }
            </div>
            <div className="text-center">
                <Link to={'/available-food'}>
                    <button className="text-center btn btn-success text-white">Show All Dishes</button>
                </Link>
            </div>
            {/* //extra one */}
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
        </div>
    );
};

export default Home;
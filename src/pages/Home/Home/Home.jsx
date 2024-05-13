import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import FeaturedFood from "../FeaturedFood/FeaturedFood";

const Home = () => {
    const foods = useLoaderData()
    // console.log(foods)
    return (
        <div>
            <Helmet>
                <title>Foody </title>
            </Helmet>

            <Banner></Banner>
            <div className="mt-16 mb-8 text-center">
                <h3 className="text-4xl text-center font-bold ">Our Popular Dishes</h3>
                <p>Feature your on-site dining options, whether its a gourmet <br /> restaurant, cozy café, or stylish bar, focusing on the culinary delights and ambiance.</p>

            </div>

            

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {
                    foods.filter(f => f.status === 'Available').slice(0, 6).map(food => <FeaturedFood key={food._id} food={food}></FeaturedFood>)
                }
            </div>
            <h3>show all btn</h3>
            <h3>extra 1</h3>
            <h3>extra 2</h3>
        </div>
    );
};

export default Home;
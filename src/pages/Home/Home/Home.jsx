import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Foody </title>
            </Helmet>
            <Banner></Banner>
            <h3>Featured Food</h3>
            <h3>show all btn</h3>
            <h3>extra 1</h3>
            <h3>extra 2</h3>
        </div>
    );
};

export default Home;
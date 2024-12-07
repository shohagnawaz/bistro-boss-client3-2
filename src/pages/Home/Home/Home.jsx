import { Helmet } from "react-helmet-async";
import { Banner } from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FoodRecom from "../FoodRecom/FoodRecom";
import PopularMenu from "../PopularItem/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

export const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <FoodRecom></FoodRecom>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};


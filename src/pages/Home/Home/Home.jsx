import { Banner } from "../Banner/Banner";
import Bistro from "../Bistro/Bistro";
import Category from "../Category/Category";
import PopularMenu from "../PopularItem/PopularMenu";

export const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
        </div>
    );
};


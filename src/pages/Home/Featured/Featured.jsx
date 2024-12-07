import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-10 my-8">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center 
            bg-slate-500 bg-opacity-60 pb-16 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="ml-10">
                    <h4>Dec 07, 2024</h4>
                    <h4 className="uppercase">Where can I get some</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Soluta quisquam ea error odio adipisci nisi nam similique 
                        iste quis quos nesciunt, asperiores eum provident praesentium 
                        cupiditate atque. Aliquid est facere voluptatibus ex non, 
                        sint iusto aut suscipit deleniti autem, neque harum eligendi 
                        amet exercitationem facilis voluptas rem reprehenderit itaque nemo.
                    </p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
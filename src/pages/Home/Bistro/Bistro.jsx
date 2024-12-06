// import image
import img from "../../../assets/home/chef-service.jpg";
const Bistro = () => {
  return (
    <div className="hero h-[400px] mb-14">
      <img src={img} alt="" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nihil nam aspernatur qui fuga, omnis explicabo facilis placeat 
            expedita quasi nostrum vel nemo. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bistro;

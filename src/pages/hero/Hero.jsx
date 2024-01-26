import InspiringCard from "../Inspiring/InspiringCard";

const Hero = () => {
  return (
    <div className="bg-[url('./assets/image/heropicture.jpg')] bg-no-repeat bg-cover h-[50vh]  relative text-white max-w-screen-2xl mx-auto">
      <div className="lg:w-2/3 mx-auto h-full flex flex-col justify-center">
        <h1 className="font-medium lg:text-5xl text-3xl text-center lg:text-left">
          Find our dream
          <br />
          Trip on ExploreThai.
        </h1>
        <p className="lg:text-2xl text-lg lg:text-left text-center mt-6 mb-4">
          We offer unbeatable price & Excellent Services
        </p>
      </div>
    </div>
  );
};

export default Hero;

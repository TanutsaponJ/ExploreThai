import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import { FaArrowRight } from "react-icons/fa";
import { DESTINATIONS } from "../../utils/data";

const Destination = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="destination"
      className="container max-w-screen-2xl mx-auto xl:px-28 px-4 py-20 space-y-8 border-b-2"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
          Top Destinations
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
        {DESTINATIONS.map((destination, index) => (
          <div
            className={`relative ${
              index === 0 || index === DESTINATIONS.length - 2
                ? "md:col-span-2 md:row-span-2"
                : ""
            }`}
            key={destination.id}
          >
            <Link
              to={`/destination/${destination.id}`}
              className="flex flex-col items-center justify-center"
              onClick={ScrollToTop}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full hover:border-4 border-yellow-300 duration-300 hover:scale-105 transition-all rounded-lg"
              />
              <h1 className="absolute bottom-3 left-4 text-5xl font-semibold text-orange">
                {destination.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <Button title="See more" icon={<FaArrowRight />} />
      </div>
    </div>
  );
};

export default Destination;

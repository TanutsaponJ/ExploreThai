// Import necessary components and icons
import { FaAddressBook, FaTrain, FaPlane } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

// Define the PlanTrip component
const PlanTrip = () => {
  // Define a function to scroll to the top of the page
  const ScrollToTop = () => {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Render the component
  return (
    <div
      id="planTrip"
      className="max-w-screen-2xl container mx-auto py-20 lg:px-28 px-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 mb-5">
        <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
          Plan Your Trip
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col  md:flex-row gap-4">
        {/* Link to the Visa & Passport page, with an onClick event to scroll to the top */}
        <Link
          to={`/planTrip/${1}`}
          onClick={ScrollToTop}
          className="flex flex-col items-center shadow-md py-5 flex-grow  w-52 md:-32 h-32 hover:bg-gray-200 transition-colors duration-200"
        >
          <FaAddressBook className="w-10 h-10 inline-flex text-orange-500 mb-4" />
          <span>Visa & Passport</span>
        </Link>

        {/* Link to the Travel In Thailand page */}
        <Link
          to={`/planTrip/${2}`}
          onClick={ScrollToTop}
          className="flex flex-col items-center shadow-md py-5 flex-grow  w-52 md:-32 h-32 hover:bg-gray-200 transition-colors duration-200"
        >
          <FaTrain className="w-10 h-10 inline-flex text-orange-500 mb-4 " />
          <span className="text-center">Travel In Thailand</span>
        </Link>

        {/* Link to the Getting Around page */}
        <Link
          to={`/planTrip/${3}`}
          onClick={ScrollToTop}
          className="flex flex-col items-center shadow-md py-5 flex-grow   w-52 md:-32 h-32 hover:bg-gray-200 transition-colors duration-200"
        >
          <FaPlane className="w-10 h-10 inline-flex text-orange-500 mb-4" />
          <span>Getting Around</span>
        </Link>

        {/* Link to the Weather page */}
        <Link
          to={`/planTrip/${4}`}
          onClick={ScrollToTop}
          className="flex flex-col items-center shadow-md py-5 flex-grow  w-52 md:-32 h-32 hover:bg-gray-200 transition-colors duration-200"
        >
          <TiWeatherPartlySunny className="w-10 h-10 inline-flex text-orange-500 mb-4" />
          <span>Weather</span>
        </Link>
      </div>
    </div>
  );
};

// Export the PlanTrip component
export default PlanTrip;

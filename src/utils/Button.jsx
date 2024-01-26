import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <button className="flex items-center gap-4 bg-orange-400 px-6 text-white rounded-md py-2 font-semibold hover:bg-orange-800 transition-all duration-300 ease-in-out">
      See More <FaArrowRight className="inline-flex" />
    </button>
  );
};

export default Button;

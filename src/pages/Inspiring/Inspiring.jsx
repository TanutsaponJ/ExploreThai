import InspiringCard from "./InspiringCard";
import { FaArrowRight } from "react-icons/fa";

const Inspiring = () => {
  return (
    <section className="container max-w-screen-2xl mx-auto xl:px-28 px-4 py-20 space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <h1 className="text-5xl font-semibold uppercase text-black text-left md:p-1.5 inline-flex">
          Inspiring
        </h1>
      </div>
      <div>
        <InspiringCard />
      </div>
      <div className="flex justify-end">
        <button className="flex items-center gap-4 bg-orange-400 px-6 text-white rounded-md py-2 font-semibold hover:bg-orange-800 transition-all duration-300 ease-in-out">
          See More <FaArrowRight className="inline-flex" />
        </button>
      </div>
    </section>
  );
};

export default Inspiring;

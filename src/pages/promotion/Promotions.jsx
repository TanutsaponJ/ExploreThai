import Button from "../../utils/Button";
import { PROMOTION } from "../../utils/data";
import PromotionCard from "./PromotionCard";
import { FaArrowRight } from "react-icons/fa";

const Promotions = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-28 px-4 py-20 border-b-2">
      <div className="flex flex-col md:flex-row  items-center gap-4 mb-4">
        <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
          Promotions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-4 ">
        {PROMOTION?.map((item) => (
          <PromotionCard
            key={item.id}
            link={item.link}
            imgUrl={item.imgUrl}
            title={item.title}
            subtitle={item.sub}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button title="See More" icon={<FaArrowRight />} />
      </div>
    </div>
  );
};

export default Promotions;

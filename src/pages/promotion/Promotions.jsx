import { PROMOTION } from "../../utils/data";
import PromotionCard from "./PromotionCard";
import Video from "../../assets/Video/PROMOTIONS.mp4";

const Promotions = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-28 px-4 py-20 border-b-2">
      <div className="flex flex-col md:flex-row  items-center gap-4 mb-4">
        <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
          Promotions With Vacay
        </h1>
      </div>

      <div className="relative mb-10">
        <video src={Video} autoPlay loop muted className="relative"></video>

        <div className="absolute w-full h-full top-0 right-0 bg-black opacity-50" />

        <h1 className="absolute md:text-5xl lg:text-6xl text-2xl text-nowrap  text-white top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2">
          DISCOVER MORE THAILAND
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
};

export default Promotions;

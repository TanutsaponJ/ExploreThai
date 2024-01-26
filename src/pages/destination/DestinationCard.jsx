import DestinationPic1 from "../../assets/image/DestinationPic1.png";
import DestinationPic2 from "../../assets/image/DestinationPic2.png";
import DestinationPic3 from "../../assets/image/DestinationPic3.png";
import DestinationPic4 from "../../assets/image/DestinationPic4.png";
import DestinationPic5 from "../../assets/image/DestinationPic5.png";

const CardItem = [
  {
    id: 1,
    img: DestinationPic1,
    title: "Bangkok",
  },
  {
    id: 2,
    img: DestinationPic2,
    title: "Chiang Mai",
  },
  {
    id: 3,
    img: DestinationPic3,
    title: "Chon Buri",
  },
  {
    id: 4,
    img: DestinationPic4,
    title: "Phuket",
  },
  {
    id: 5,
    img: DestinationPic5,
    title: "Ubon Ratchatani",
  },
];

const DestinationCard = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-58">
      {CardItem.map((item) => (
        <div
          key={item.id}
          className="relative transform transition duration-500 ease-in-out hover:scale-105 shadow-lg mx-auto "
        >
          <img src={item.img} />
          <h2 className="absolute font-bold text-black bottom-4 text-xl left-2">
            {item.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default DestinationCard;

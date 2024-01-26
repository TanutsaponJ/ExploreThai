import picture1 from "../../assets/image/inspiringImgCmsm.png";
import picture2 from "../../assets/image/inspiringImgKCBsm.png";
import picture3 from "../../assets/image/inspiringImgUbonsm.png";
import picture4 from "../../assets/image/inspiringImgChonsm.png";
import picture5 from "../../assets/image/inspiringImgNakhonsm.png";
import { Link } from "react-router-dom";

const cardItem = [
  {
    id: 1,
    img: picture1,
    title: "Chiang Mai - Lumphun: Hotspots For Digital Nomads",
    subtitle: "Province",
  },
  {
    id: 2,
    img: picture2,
    title: "Kanchanaburi - Suphan Buri Slow Travel, See More!",
    subtitle: "Province",
  },
  {
    id: 3,
    img: picture3,
    title: "Fashionable Finds In Northeastern Thai: Khon Kaen - Udon Thani",
    subtitle: "Shop",
  },
  {
    id: 4,
    img: picture4,
    title: "Finding Rest And Blessings In Chonburi And Chachoengsao",
    subtitle: "Province",
  },
  {
    id: 5,
    img: picture5,
    title:
      "Revitalize And Recharge: Exploring Nakhon Ratchasima And Nakhon Nayok",
    subtitle: "Destination",
  },
];

const InspiringCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {cardItem.map((item) => (
        <Link
          to="/"
          key={item.id}
          className="rounded overflow-hidden shadow-lg p-4 relative transform transition duration-500 ease-in-out hover:scale-105"
        >
          <img className="w-full h-72 object-cover" src={item.img} />
          <span className=" bg-green-400/70 font-bold p-1 rounded-md shadow-md absolute top-6 right-3 w-auto">
            {item.subtitle}
          </span>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default InspiringCard;

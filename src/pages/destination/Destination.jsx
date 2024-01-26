import DestinationPic1 from "../../assets/image/DestinationPic1.png";
import DestinationPic2 from "../../assets/image/DestinationPic2.png";
import DestinationPic3 from "../../assets/image/DestinationPic3.png";
import DestinationPic4 from "../../assets/image/DestinationPic4.png";
import DestinationPic5 from "../../assets/image/DestinationPic5.png";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";

const Destination = () => {
  return (
    <div className="container max-w-screen-2xl mx-auto xl:px-28 px-4 py-20 space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <h1 className="text-5xl font-semibold text-left uppercase md:p-1.5 inline-flex">
          Top Destinations
        </h1>
      </div>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="relative">
          <Link to="/">
            <img
              src={DestinationPic1}
              alt="pic1"
              className="w-full h-full hover:border-4 border-yellow-300 duration-300 hover:scale-105 transition-all"
            />
            <h1 className="absolute bottom-3 left-4 text-5xl font-semibold text-orange">
              Bangkok
            </h1>
          </Link>
        </div>

        <div className="md:w-1/2 flex-row ">
          <div className="grid grid-cols-2 gap-4 relative">
            <div>
              <Link to="/">
                <img
                  src={DestinationPic2}
                  alt="pic2"
                  className="w-full h-full hover:border-4 border-yellow-300 duration-300 hover:scale-105 transition-all"
                />
                <h1 className="absolute top-1 font-bold text-xl  ">
                  Chiang Mai
                </h1>
              </Link>
            </div>
            <div>
              <Link to="/">
                <img
                  src={DestinationPic3}
                  alt="pic3"
                  className="w-full h-full hover:border-4 border-yellow-300 duration-300 hover:scale-105 transition-all"
                />
                <h1 className="absolute top-1 font-bold text-xl">Chon Buri</h1>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <Link to="/">
              <img
                src={DestinationPic4}
                alt="pic4"
                className="w-full h-full hover:border-4 border-yellow-300 duration-300 hover:scale-105 transition-all"
              />
              <h1 className="absolute top-1 font-bold text-xl">Phuket</h1>
            </Link>
            <Link to="/">
              <img
                src={DestinationPic5}
                alt="pic5"
                className="w-full h-full hover:border-4 border-yellow-300 duration-300 hover:scale-105 transition-all"
              />
              <h1 className="absolute top-1 font-bold text-xl">
                Ubon Ratchatanis
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Button title="See more" />
      </div>
    </div>
  );
};

export default Destination;

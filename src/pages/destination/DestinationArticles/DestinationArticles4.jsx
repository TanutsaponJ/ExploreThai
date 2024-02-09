import PhuketHeaderImage from "../../../assets/DestinationImage/phuketheader.png";
import Map from "../../../components/map/Map";
import { PHUKET_THAILAND } from "../../../utils/data";

const DestinationArticles4 = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20 gap-6 flex flex-col">
      <div>
        <img src={PhuketHeaderImage} alt="" />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-gradient text-left">Phuket</h1>
      </div>

      <div>
        {PHUKET_THAILAND.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-semibold">{`${index + 1}.${
                item.title
              }`}</h1>
            </div>
            <div className="flex flex-col gap-6 mb-10">
              <img src={item.imgUrl} alt="" className="Articles-Image" />
              <div>
                <p className="Articles-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Map />
    </div>
  );
};

export default DestinationArticles4;

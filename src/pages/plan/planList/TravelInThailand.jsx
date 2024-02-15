import { Link } from "react-router-dom";
import PlanImage from "../../../assets/planTripImage/TravelInThailand.png";
import PlanImage1 from "../../../assets/planTripImage/TravelInThailand2.png";

import ShareLink from "../../../utils/ShareLink";

const TravelInThailand = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20 flex flex-col gap-4">
      <div>
        <img src={PlanImage} alt="" />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-left text-gradient">
          TravelInThailand
        </h1>
      </div>

      <div>
        <ShareLink />
      </div>

      <div className="flex flex-col gap-4 bg-slate-200 px-6 py-2 rounded-md">
        <div>
          <h1 className="text-3xl font-semibold text-blue-300">Overview</h1>
        </div>
        <div className="flex flex-col gap-6">
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("land")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="Plan-text"
          >
            Land
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("boat")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="Plan-text"
          >
            Boat
          </Link>
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("air")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="Plan-text"
          >
            Air
          </Link>
        </div>

        <div>
          <p className="Plan-text">
            There are various Transportation options provided for tourists – by
            land, by air, and by Boat.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div id="land" className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold ">Land</h1>
          </div>
          <div>
            <p className="Plan-text">
              Traveling on the road is the main choice if you wish to go through
              provinces within Thailand. Public Transportation: either
              long-distance or short-distance Trips in Bangkok or other
              provinces, tourists can Travel around by bus, by train, by sky
              train, by subway, by van, and by Song Taew (small pick-up truck
              with two rows of bench). Taxi: Bangkok and big provinces have
              metered taxis. Tuk Tuk: a three-wheeled motorcycle which becomes a
              symbol of Thailand and can be found around Bangkok and in some
              provinces. Motorcycle Taxi: motorcycle taxis can be found close to
              street intersections or small allies for quick Transportation and
              short distances. rental car and Motorcycle: visitors who want to
              have independent Travel or do not want to waste their time waiting
              for public Transport can rent a car or a motorcycle from Local
              companies as well as international chains. Some companies also
              provide a dRiver for tourist’s convenience and safety. Vehicle
              rental companies can be found in big cities, airports, and bus or
              train stations. Traveling by car, motorcycle and bicycle is quite
              convenient for tourists because there are traffic signs available
              both in the Thai and English languages.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div id="boat">
            <h1 className="text-3xl font-bold ">Boat</h1>
          </div>
          <div>
            <p className="Plan-text">
              Thailand has two long coastlines – the Gulf of Thailand and the
              Andaman coast islands. Also, there are many Rivers and canals
              throughout the country including Bangkok, which once was called
              ‘the Venice of the East.’ The long-tail Boats are a main Transport
              on Rivers and canals in Bangkok and neighboring provinces.
              Visitors can also have a boat Trip or River cruise in Bangkok or a
              trip for snorkeling, Fishing or squid fishing in other provinces.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4" id="air">
          <div>
            <h1 className="text-3xl font-bold ">Air</h1>
          </div>
          <div className="flex flex-col gap-6">
            <p className="Plan-text">
              There are many domestic air routes from Bangkok and provincial
              capitals. Two main airports in Bangkok are Don Mueang
              international Airport and Suvarnabhumi International Airport.
              Moreover, for those who want to have more privacy and
              independence, they can rent a private plane as well. Thailand’s
              air Transport has grown rapidly since the World War II. The first
              Thai airport was Don Mueang international Airport, which started
              providing service since in 1914 and was closed in 2006 when
              Suvarnabhumi International Airport was officially opened. However,
              Don Mueang Airport was reopened again in 2007 for domestic
              flights. These days we have many international airlines from many
              countries all over the world operating from Don Mueang and
              Suvarnabhumi, making these some of the most important airports in
              south East Asia. There are also international airports in tourist
              popular provinces of Thailand such as Chiang Mai, Chiang Rai,
              Phuket, Hat Yai, Udon Thani, and Krabi. This network of airports
              bolsters the Thai Tourism industry and encourages those tourists
              who don’t want to spend too much of their time Travelling by bus,
              van, or Boat.
            </p>

            <div>
              <Link
                to="https://www.airasia.com/th/th"
                className="text-red-500 font-bold text-2xl"
              >
                <h1>Air Asia</h1>
              </Link>
              <p className="Plan-text">
                Name : Air Asia Address : Suvarnabhumi international Airport
                Departure Hall, 4th Flr., Room No. T4 - B01/01-04 No. 999, Moo
                1, Bangplee, Samutprakarn 10540 Telephone : +66 25159999
              </p>
            </div>
            <div>
              <Link to="https://www.bangkokair.com/">
                <h1 className="text-3xl text-blue-400 font-bold">
                  Bangkok AIRWAYS
                </h1>
              </Link>
              <p className="Plan-text">
                Name : Bangkok AirwaysAddress : 99 Mu 14, Vibhavadirangsit Rd.,
                Chom Phon, Chatuchak, Bangkok, 10900, Thailand Telephone : +66
                22706699
              </p>
            </div>
            <div>
              <h1 className="text-3xl text-blue-400 font-bold">
                Bangkok AVIATION CENTER CO.,LTD.(BAC)
              </h1>
              <p className="Plan-text">
                Name : Bangkok Aviation center Co.,Ltd.(BAC) Address : 222
                Hanger 4414 Viphavadee Rangsit Road, Sikan , Donmuang, Bangkok
                10210 Thailand. Telephone : 66 2535 7740-2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <img src={PlanImage1} alt="" />
      </div>
    </div>
  );
};

export default TravelInThailand;

import { Link } from "react-router-dom";
import GettingAroundImage from "../../../assets/planTripImage/GettingAround.png";
import GettingAroundImage1 from "../../../assets/planTripImage/MRTBangkok.jpg";
import GettingAroundImage2 from "../../../assets/planTripImage/MRT2.jpg";
import GettingAroundImage3 from "../../../assets/planTripImage/AirportLink.jpg";

const GettingAround = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto flex flex-col gap-4 lg:px-28 px-20 ">
      <div>
        <img src={GettingAroundImage} alt="" />
      </div>

      <div>
        <h1 className="text-4xl text-left text-gradient font-bold">
          Around Cities
        </h1>
      </div>

      <div className="bg-slate-200 px-6 py-2 flex flex-col gap-4 rounded-md">
        <div>
          <h1 className="font-bold text-2xl">Overview</h1>
        </div>
        <div className="flex flex-col gap-4 ">
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("mrt")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="Plan-text w-fit px-2 underline  hover:text-blue-600 transition-all duration-150"
          >
            Underground Bangkok MRT Subway
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("bts")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="Plan-text w-fit px-2  underline hover:text-blue-600 transition-all duration-150"
          >
            Bangkok BTS Sky train
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("airportLink")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="Plan-text w-fit px-2 underline  hover:text-blue-600 transition-all duration-150"
          >
            Airport Rail Link
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div id="mrt" className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold">
              Underground Bangkok MRT Subway
            </h1>
          </div>

          <div>
            <p className="Plan-text">
              Bangkok’s transportation system has entered the 21st century with
              modern, electric rail lines that are easing traffic and making
              Travel around the capital City both comfortable and convenient.{" "}
            </p>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <p className="Plan-text">For more information, please enter :</p>
              <Link
                className="text-red-500"
                target="_blank"
                rel="noopener noreferrer"
                to="https://metro.bemplc.co.th"
              >
                Click for more!
              </Link>
            </div>
          </div>

          <div>
            <img src={GettingAroundImage1} alt="" />
          </div>
        </div>

        <div id="bts" className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold">Bangkok BTS Sky train</h1>
          </div>

          <div>
            <p className="Plan-text">
              The BTS Skytrain is the safest, most comfortable and convenient
              way to get around Bangkok. In service since December 5, 1999, it
              has transformed the face of public transportation in the Thai
              capital, for the first time offering both residents and visitors a
              comfortable ride through central Bangkok - lifting commuters above
              the chronic congestion, noise and pollution of the streets below.{" "}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-center">
            <p className="Plan-text">For more information, please enter :</p>
            <Link
              className="text-red-500"
              target="_blank"
              rel="noopener noreferrer"
              to="https://www.bts.co.th/"
            >
              Click here for more!
            </Link>
          </div>

          <div>
            <img src={GettingAroundImage2} alt="" />
          </div>
        </div>

        <div id="airportLink" className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-bold">Airport Rail Link</h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="Plan-text">
              Airport Rail link provides train service at the maximum speed of
              160 kilometer per hour on an elevated track parallel to the
              eastern railway, which covers the distance of approximately 28
              kilometers, passing through 8 stations; Phyathai Station,
              Rajprarop Station, Makkasan Station and City Air Terminal,
              Ramkhamhaeng Station, Hua Mark Station, Thab Chang Station, Lad
              Krabang Station, and Suvarnabhumi Station. Passengers who wish to
              Travel to Suvarnabhumi Airport have three options of service:{" "}
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <p className="Plan-text">
                  SA Express, a train service that transports passenger from
                  City Air Terminal or Makkasan Station to Suvarnabhumi Airport
                  within 15 minutes without stopping at any station along the
                  way.
                </p>
              </div>
              <div>
                <p className="Plan-text">
                  SA Express, a new express route that transports passenger from
                  Phyathai Station to Suvarnabhumi Airport within 20 minutes
                  without stopping at any station along the way.
                </p>
              </div>
              <div>
                <p className="Plan-text">
                  City line, a train service that transports passengers between
                  Phyathai Station and Suvarnabhumi Airport within 30 minutes
                  and stops at every station along the way. It can be connected
                  to MRT (subway) at Makkasan Station and BTS (skytrain) at
                  Phyathai Station.
                </p>
              </div>
            </div>

            <div>
              <p className="Plan-text">
                Operate daily from 06.00 - 24.00 hrs.{" "}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-2 items-center">
              <p className="Plan-text">For more information, please enter</p>
              <Link
                className="text-red-500"
                to="https://www.srtet.co.th/th"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click !
              </Link>
            </div>

            <div className="mb-10">
              <img src={GettingAroundImage3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingAround;

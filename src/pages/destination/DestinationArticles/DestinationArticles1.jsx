import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import DestinationImages from "../../../assets/DestinationImage/Bangkok.jpg";
import DestinationImages1 from "../../../assets/DestinationImage/Bangkok1.jpg";
import DestinationImages2 from "../../../assets/DestinationImage/Bangkok2.jpg";
import DestinationImages3 from "../../../assets/DestinationImage/Bangkok3.jpg";
import DestinationImages4 from "../../../assets/DestinationImage/Bangkok4.jpg";

const DestinationArticles = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto  lg:px-28 px-20 flex flex-col gap-5 ">
      <div>
        <img src={DestinationImages} alt="" />
      </div>

      <div className="text-4xl font-bold text-left text-gradient ">
        <h1>Bangkok</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-lg font-semibold">
          <h1>Highlights</h1>
        </div>

        <div className="flex flex-col gap-4">
          <div className="mb-4">
            <h2 className="text-2xl">
              <span className="text-orange-500">1. </span>Wat Phra Kaew
            </h2>
          </div>
          <div className="flex flex-col gap-5 ">
            <div>
              <img src={DestinationImages1} alt="" className="Articles-Image" />
            </div>
            <div className="flex">
              <div className="w-1/3 p-1 flex items-center justify-center">
                <img
                  src={DestinationImages2}
                  alt=""
                  className="Articles-Image object-cover h-32"
                />
              </div>
              <div className="w-1/3 p-1 flex items-center justify-center">
                <img
                  src={DestinationImages3}
                  alt=""
                  className="Articles-Image object-cover h-32"
                />
              </div>
              <div className="w-1/3 p-1 flex items-center justify-center">
                <img
                  src={DestinationImages4}
                  alt=""
                  className="Articles-Image object-cover h-32"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="Articles-text">
              Wat Phra Kaew, commonly known in English as the Temple of the
              Emerald Buddha and officially as Wat Phra Si Rattana Satsadaram,
              is regarded as the most sacred Buddhist temple in Thailand. The
              complex consists of a number of buildings within the precincts of
              the Grand Palace in the historical centre of Bangkok.
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-bold">Located in :</h1>
              <Link
                className="underline"
                to="https://www.google.com/search?sca_esv=ce4ded2b35135c5f&rlz=1C1YTUH_thUS1083US1083&sxsrf=ACQVn0-GSSwNUrs3YRztqTdIL-HZDJ1n4w:1706982835222&q=The+Grand+Palace&ludocid=3056950040631135297&lsig=AB86z5WKYc9s_nB03LhDuLS-9RpW&sa=X&sqi=2&ved=2ahUKEwj0sZ_M3o-EAxVjk4kEHWdMD_AQ8G0oAHoECFMQAQ&biw=1619&bih=1269&dpr=1"
              >
                The Grand Palace
              </Link>
            </div>

            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-bold">Departments</h1>
              <Link
                className="underline"
                to="https://www.google.com/search?sca_esv=ce4ded2b35135c5f&rlz=1C1YTUH_thUS1083US1083&sxsrf=ACQVn0-GSSwNUrs3YRztqTdIL-HZDJ1n4w:1706982835222&q=Hor+Phra+Monthian+Dharma&ludocid=2533501439539889318&lsig=AB86z5XTjxuXbC3u-KqUGTWYiEuU&sa=X&ved=2ahUKEwj0sZ_M3o-EAxVjk4kEHWdMD_AQ8m16BAg_EAE&biw=1619&bih=1269&dpr=1"
              >
                Hor Phra Monthian Dharma
              </Link>
            </div>

            <div className="flex gap-2 items-center mb-2">
              <div className="flex items-center gap-2">
                <h1 className="text-lg  font-bold">Hours:</h1>
                <IoTimeOutline className="inline-flex" />
              </div>

              <p>8:30&#58;AM &#45; 3:30&#58;PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationArticles;

import { Link } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import DestinationImages from "../../../assets/DestinationImage/Bangkok.jpg";
import DestinationImages1 from "../../../assets/DestinationImage/Bangkok1.jpg";

const DestinationArticles = () => {
  return (
    <div>
      <div>
        <img src={DestinationImages} alt="" />
      </div>

      <div>
        <h1>Bangkok</h1>
      </div>

      <div>
        <div>
          <h1>Highlights</h1>
        </div>

        <div>
          <div>
            <h2>
              <span>1.</span>Wat Phra Kaew
            </h2>
          </div>
          <div>
            <img src={DestinationImages1} alt="" />
          </div>
          <div>
            <p>
              Wat Phra Kaew, commonly known in English as the Temple of the
              Emerald Buddha and officially as Wat Phra Si Rattana Satsadaram,
              is regarded as the most sacred Buddhist temple in Thailand. The
              complex consists of a number of buildings within the precincts of
              the Grand Palace in the historical centre of Bangkok.
            </p>
          </div>
          <div>
            <div>
              <h1>Located in :</h1>
              <Link to="https://www.google.com/search?sca_esv=ce4ded2b35135c5f&rlz=1C1YTUH_thUS1083US1083&sxsrf=ACQVn0-GSSwNUrs3YRztqTdIL-HZDJ1n4w:1706982835222&q=The+Grand+Palace&ludocid=3056950040631135297&lsig=AB86z5WKYc9s_nB03LhDuLS-9RpW&sa=X&sqi=2&ved=2ahUKEwj0sZ_M3o-EAxVjk4kEHWdMD_AQ8G0oAHoECFMQAQ&biw=1619&bih=1269&dpr=1">
                The Grand Palace
              </Link>
            </div>

            <div>
              <h1>Departments</h1>
              <Link to="https://www.google.com/search?sca_esv=ce4ded2b35135c5f&rlz=1C1YTUH_thUS1083US1083&sxsrf=ACQVn0-GSSwNUrs3YRztqTdIL-HZDJ1n4w:1706982835222&q=Hor+Phra+Monthian+Dharma&ludocid=2533501439539889318&lsig=AB86z5XTjxuXbC3u-KqUGTWYiEuU&sa=X&ved=2ahUKEwj0sZ_M3o-EAxVjk4kEHWdMD_AQ8m16BAg_EAE&biw=1619&bih=1269&dpr=1">
                Hor Phra Monthian Dharma
              </Link>
            </div>

            <div>
              <h1>
                Hours: <IoTimeOutline />
              </h1>
              <p>8:30&#58;AM &#45; 3:30&#58;PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationArticles;

import { FaLocationDot } from "react-icons/fa6";

import DestinationImage from "../../../assets/DestinationImage/ChiangMai.jpg";
import DestinationImage1 from "../../../assets/DestinationImage/CM11.png";
import DestinationImage2 from "../../../assets/DestinationImage/CM2.jpg";
import DestinationImage3 from "../../../assets/DestinationImage/CM3.jpg";
import DestinationImage4 from "../../../assets/DestinationImage/CM4.png";
import DestinationImage5 from "../../../assets/DestinationImage/CM5.png";
import DestinationImage6 from "../../../assets/DestinationImage/CM6.png";

const DestinationArticles2 = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20 flex flex-col gap-6 mb-10">
      <div>
        <img src={DestinationImage} alt="" />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <FaLocationDot className="text-4xl  text-gray-500" />
          <h1 className="text-4xl font-bold text-left text-gradient">
            Doi Suthep, ChiangMai
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <img src={DestinationImage1} alt="" className="Articles-Image" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Address :</h1>
            <p className="Articles-text">
              Suthep Subdistrict, Mueang Chiang Mai District, Chiang Mai 50200
              Thailand
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Common name :</h1>
          <p className="Articles-text">
            Wat Phra That Doi Suthep Phra That Doi Suthep, Doi Suthep
          </p>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Location:</h1>
          <p className="Articles-text flex-wrap">
            Sriwichai Road, Suthep Subdistrict, Mueang Chiang Mai District
            Chiang Mai Province
          </p>
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Business hours :</h1>
          <p className="Articles-text">6:00&#58;AM &#45; 20:00&#58;PM</p>
        </div>

        <div>
          <div>
            <img src={DestinationImage3} alt="" className="Articles-Image" />
          </div>
        </div>

        <div>
          <p className="Articles-text">
            Locals would say, You haven't really gone to Chiang Mai unless
            you've been to Wat Phratat doi suthep. Wat Phra That doi suthep is
            the most important temple in Chiang Mai, Thailand. Built in the
            early 19th Buddhist century, the beauty of Wat Phra That Doi Suthep
            is marked by seven-headed serpent statues that line the stairs to
            the temple where a Chiang Saen style golden pagoda and all its
            exquisite Lanna architecture is situated. The view of Chiang Mai
            from here is just phenomenal as well. At Wat Phra That Doi Suthep
            they also have Tiaw Khuen Doi Festival, which is the travel up Doi
            Suthep Hill to worship the Buddhist relics enshrined there. It is an
            experience worth checking out. Wat Phra That Doi Suthep is located
            in Tambon Suthep, Amphoe Mueang, Chiang Mai Province. Doi Suthep
            Hill is 11 kilometers away from the center of Chiang Mai. If you
            travel by car, take the Huai Kaew-Chiang Mai University-Chiang Mai
            Zoo road and you will see the way to Wat Phra That Doi Suthep
            signposted. There are also small buses running from Chiang Mai
            University, which are available from 5.00 am-5.00 pm. Two ways to
            get to Phra That Doi Suthep Temple - Walking up the seven-headed
            serpent stairs. It is also a great spot to take pictures. - Taking
            an electric tram, which is available from 6.00 am-6.00 pm. The fee
            is 20 THB for Thais and 50 THB for foreigners. Opening Hours: Daily
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <img src={DestinationImage2} alt="" className="Articles-Image" />
        </div>

        <div className="flex">
          <div className="w-1/3 p-1">
            <img src={DestinationImage4} alt="" className="Articles-Image" />
          </div>
          <div className="w-1/3 p-1">
            <img src={DestinationImage5} alt="" className="Articles-Image" />
          </div>
          <div className="w-1/3 p-1">
            <img src={DestinationImage6} alt="" className="Articles-Image" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            A Little Information About Wat Phra That Doi Suthep
          </h1>

          <p className="Articles-text">
            Although the temple is actually called Wat Phra That Doi Suthep, if
            you just say Doi Suthep anywhere in town, they’ll take you where you
            want to go. There are several versions of the history of this
            temple. What is known, though, is that this temple got its start
            when the stupa was built in the 14th century with many expansions
            being built since then. Legend has it that the remains contained in
            the Golden Stupa are the Buddha’s shoulder bone. This bone was found
            when a monk had a dream where he was told to go find a relic. Then,
            he found this shoulder bone, believed to be the Buddha’s. At some
            point in history, the bone broke into two pieces. The smaller is
            enshrined somewhere else, but the larger piece was brought to the
            top of Doi Suthep on the back of a White Elephant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationArticles2;

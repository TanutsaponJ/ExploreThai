import WeatherImage from "../../../assets/planTripImage/Weather.jpg";
import ChartWeather from "../../../assets/planTripImage/download.png";

const Weather = () => {
  return (
    <div className="max-w-screen-2xl container mmx-auto lg:px-28 px-20 flex flex-col gap-4 mb-10">
      <div>
        <img src={WeatherImage} alt="" />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-left text-gradient">
          Thailand Climate & Weather
        </h1>
      </div>

      <div>
        <p className="Plan-text">
          Thailand is located between vast areas of land and water, so it is
          impacted by both the summer and the winter monsoons. As a result,
          Thailand weather consists of six months of rainfalls during the wet
          season, three months of dry and cooling breezes during the winter, and
          three months of heat during the summer. The average temperature of
          Thailand ranges from 18 to 38°C.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gradient">
          Thailand average temperatures and precipitation
        </h3>
      </div>

      <div>
        <img src={ChartWeather} alt="" />
      </div>
    </div>
  );
};

export default Weather;

import { useState } from "react";

import { IoIosPartlySunny, IoIosRainy, IoIosSnow } from "react-icons/io";

import SeasonCard from "./SeasonCard";
import { SEASON_HIGHLIGHT } from "../../utils/data";

const Season = () => {
  const [seasonData, setSeasonData] = useState(SEASON_HIGHLIGHT);
  const [selectedSeason, setSelectedSeason] = useState("Summer");

  const filterSeasons = (seasonType) => {
    const filteredSeasons = SEASON_HIGHLIGHT.filter(
      (season) => season.season === seasonType
    );
    setSeasonData(filteredSeasons);
    setSelectedSeason(seasonType);
  };

  return (
    <div
      id="season"
      className="container mx-auto max-w-screen-2xl px-4 lg:px-28 py-20 border-b-2"
    >
      <div>
        <div className="flex flex-col items-center mb-4 lg:items-start">
          <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
            Season Highlight
          </h1>
        </div>

        <div className="flex gap-5 md:flex-row items-center justify-around  mb-4">
          <button
            onClick={() => filterSeasons("Summer")}
            className={`flex items-center gap-4  bg-orange-400 px-6 text-white rounded-md py-2 font-semibold hover:bg-orange-800 transition-all duration-300 ease-in-out hover:text-black  ${
              selectedSeason === "Summer" ? "active" : ""
            }`}
          >
            Summer <IoIosPartlySunny />
          </button>
          <button
            onClick={() => filterSeasons("Rainy")}
            className={`flex items-center gap-4  bg-orange-400 px-6 text-white rounded-md py-2 font-semibold hover:bg-orange-800 transition-all duration-300 ease-in-out hover:text-black ${
              selectedSeason === "Rainy" ? "active" : ""
            } `}
          >
            Rainy <IoIosRainy />
          </button>
          <button
            onClick={() => filterSeasons("Winter")}
            className={`flex items-center gap-4  bg-orange-400 px-6 text-white rounded-md py-2 font-semibold hover:bg-orange-800 transition-all duration-300 ease-in-out hover:text-black ${
              selectedSeason === "Winter" ? "active" : ""
            } `}
          >
            Winter <IoIosSnow />
          </button>
        </div>
        <div>
          <SeasonCard seasonData={seasonData} />
        </div>
      </div>
    </div>
  );
};

export default Season;

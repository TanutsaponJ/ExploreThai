import { useEffect, useState } from "react";
import Button from "../../utils/Button";
import { IoIosPartlySunny, IoIosRainy, IoIosSnow } from "react-icons/io";
import SeasonCard from "./SeasonCard";
import { SEASON_HIGHLIGHT } from "../../utils/data";

const Season = () => {
  const [seasonData, setSeasonData] = useState([]);
  const [filterSeason, setFilterSeason] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("Summer");

  useEffect(() => {
    setSeasonData(SEASON_HIGHLIGHT);
    setFilterSeason(SEASON_HIGHLIGHT);
  }, []);

  // ! filter SeasonHighlight

  const FilterItem = (season) => {
    const filtered =
      season === "all"
        ? seasonData
        : seasonData.filter((item) => item.season === season);
    setFilterSeason(filtered);
    setSelectedSeason(season);
  };

  const showAll = () => {
    setFilterSeason(seasonData);
    setSelectedSeason("all");
  };

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 lg:px-28 py-20 border-b-2">
      <div>
        <div className="flex flex-col items-center mb-4 lg:items-start">
          <h1 className="text-5xl font-semibold uppercase text-gradient text-left md:p-1.5 inline-flex">
            Season Highlight
          </h1>
        </div>

        <div className="flex flex-col gap-5 md:flex-row items-center justify-around ">
          <Button title="All" onClick={showAll} />
          <Button
            onClick={() => FilterItem("Summer")}
            title="Summer"
            icon={<IoIosPartlySunny />}
          />
          <Button
            onClick={() => FilterItem("Rainy")}
            title="Rainy"
            icon={<IoIosRainy />}
          />
          <Button
            onClick={() => FilterItem("Winter")}
            title="Winter"
            icon={<IoIosSnow />}
          />
        </div>
        <div>
          <SeasonCard
            seasonData={filterSeason}
            selectedSeason={selectedSeason}
          />
        </div>
      </div>
    </div>
  );
};

export default Season;

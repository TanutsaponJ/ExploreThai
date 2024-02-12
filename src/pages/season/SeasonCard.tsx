import { Link } from "react-router-dom";
import React, { useEffect } from "react"; // Add import statement for React

// Define a type for the season data
interface Season {
  id: string;
  season: string;
  title: string;
  imgUrl: string;
}

// Define a type for the component props
interface SeasonCardProps {
  seasonData: Season[];
}

const SeasonCard: React.FC<SeasonCardProps> = ({ seasonData }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-center gap-4">
      {seasonData.slice(0, 4).map((seasons) => (
        <div key={seasons.id} className="relative mx-auto">
          <Link
            onClick={scrollToTop}
            to={`/${seasons.season}/${seasons.title}`}
          >
            <img
              src={seasons.imgUrl}
              alt={seasons.id}
              className="transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </Link>
          <div className="absolute bottom-2 left-2">
            <h4 className="font-bold text-white text-2xl">{seasons.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonCard;

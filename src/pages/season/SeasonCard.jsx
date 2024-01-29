import { Link } from "react-router-dom";

const SeasonCard = ({ seasonData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 shadow-md">
      {seasonData.map((seasons) => (
        <div key={seasons.id}>
          <Link to={`/${seasons.season}/${seasons.title}`}>
            <img src={seasons.imgUrl} alt={seasons.id} />
          </Link>
          <div>
            <h4>{seasons.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeasonCard;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PromotionCard = ({ subtitle, imgUrl, title, link }) => {
  return (
    <Link to={link}>
      <div className="min-w-48 flex flex-col items-center justify-center py-6 sm:py-14 hover:scale-105 bg-lightBlue duration-300">
        <div className="flex flex-col justify-center items-center space-y-4 relative">
          <img src={imgUrl} alt={title} className="" />
          <p className="absolute top-4 right-4 h-8 rounded-md px-4 text-white font-bold uppercase items-center flex bg-green-500/50">
            {subtitle}
          </p>
          <h1 className="text-xl md:text-2xl text-darkBlue mt-1 text-center">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

PromotionCard.propTypes = {
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PromotionCard;

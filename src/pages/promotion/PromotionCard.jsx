import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../../utils/Button";
import { MdKeyboardArrowRight } from "react-icons/md";

const PromotionCard = ({ subtitle, imgUrl, title, link }) => {
  return (
    <Link to={link}>
      <div className="min-w-48 flex flex-col items-center justify-center sm:py-14 hover:scale-105 duration-300 ">
        <div className="flex flex-col justify-center items-center space-y-4 relative shadow-md border-2 border-white ">
          <img src={imgUrl} alt={title} className="" />
          <div className="w-full h-auto absolute flex flex-col gap-2 ">
            <h1 className="text-xl md:text-2xl text-white mt-1 text-center uppercase">
              {title}
            </h1>
            <div className="flex justify-center">
              <Button title="Let's Go" icon={<MdKeyboardArrowRight />} />
            </div>
          </div>
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

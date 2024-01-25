import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <div className="flex gap-4">
      <Link
        className="hover:text-orange-500"
        to="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size="2.4rem" />
      </Link>
      <Link
        className="hover:text-orange-500"
        to="https://www.github.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size="2.4rem" />
      </Link>
      <Link
        className="hover:text-orange-500"
        to="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillTwitterCircle size="2.4rem" />
      </Link>
      <Link
        className="hover:text-orange-500"
        to="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook size="2.4rem" />
      </Link>
    </div>
  );
};

export default SocialLink;

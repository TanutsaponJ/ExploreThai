import { Link } from "react-router-dom";
import FooterLink from "./footerLink/FooterLink";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import SocialLink from "../../utils/SocialLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showLinks, setShowLinks] = useState(null);

  return (
    <footer>
      {/* Footer top */}
      <div className="bg-slate-500 flex flex-col pt-8 max-w-screen-2xl  container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8  ">
          {FooterLink.map((item, index) => (
            <div key={item.title}>
              <div className="mb-3 border-b-2 border-gray-200 pb-2 flex justify-between items-center">
                <h4 className="font-semibold">{item.title}</h4>
                <button
                  className={`sm:hidden transform ${
                    showLinks === index ? "rotate-180" : ""
                  } transition-transform duration-500`}
                  onClick={() =>
                    setShowLinks(showLinks === index ? null : index)
                  }
                >
                  <SlArrowDown className="h-8 w-8" />
                </button>
              </div>

              <div
                className={`space-y-2 mb-4 transition-all duration-500 ease-in-out overflow-hidden max-h-${
                  showLinks === index ? "full" : "0"
                } sm:max-h-full md:overflow-visible`}
              >
                {item.links.map((linkItem) => (
                  <Link
                    className={`text-sm block hover:text-orange-500 ${
                      showLinks === index ? "sm:block" : "hidden"
                    } md:block`}
                    to={linkItem.path}
                    key={linkItem.Link}
                  >
                    {linkItem.Link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 m-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-10">
            <h1 className="text-xl">
              Explore <span className="text-orange-500 font-bold">Thai.</span>
            </h1>
            <p>All every you need to know about Thailand</p>
            <div>
              <SocialLink />
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-slate-900 max-w-screen-2xl mx-auto text-white flex flex-col sm:flex-row  justify-between px-4 py-4">
        <div className="flex gap-2 flex-col md:flex-row items-center mb-4">
          <p>Copyright © {currentYear}</p>

          <h1 className="font-semibold">Tanutsapon Jinaongkan</h1>
        </div>
        <div>
          <ul className="flex gap-4 flex-col md:flex-row mb-2 items-center">
            <Link>Terms Of Use</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
            <Link>Sitemap</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

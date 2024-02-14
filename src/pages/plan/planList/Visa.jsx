import { Link } from "react-router-dom";
import PlanTripImage from "../../../assets/planTripImage/harder.png";
import PlanTripImage1 from "../../../assets/planTripImage/subHarder.png";
import PlanTripImage2 from "../../../assets/planTripImage/subHarder2.png";
import PlanTripImage3 from "../../../assets/planTripImage/subHarder3.png";
import PlanTripImage4 from "../../../assets/planTripImage/subHarder4.png";

import {
  RequiredDocuments,
  countriesEligible,
  insuranceCoverage,
  locations,
  travelerRequirements,
} from "../../../utils/data";

const Visa = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto flex flex-col lg:px-28 px-20 gap-4 py-4">
      <div>
        <h1 className="text-4xl text-left font-bold text-gradient">
          Visa on Arrival
        </h1>
      </div>

      <div>
        <p className="text-lg font-normal">
          (Updated last October 11, 2023, Bangkok, Thailand)
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <img src={PlanTripImage} alt="" />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Securing a Visa on Arrival upon entering Thailand
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <p className="Articles-text">
              The Visa On Arrival scheme allows passport holders of 19* listed
              countries and territories to enter Thailand without needing to
              apply for a Tourist Visa from a Thai Embassy in their own country.
            </p>
          </div>
          <div>
            <p className="Articles-text">
              To receive a Visa on Arrival, a traveler must meet the following
              requirements:
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {travelerRequirements.map((travelQue, index) => (
            <div key={travelQue.id} className="flex flex-row gap-2">
              <div>
                <p className="Articles-text">{index + 1}</p>
              </div>
              <div>
                <p className="Articles-text">{travelQue.dec}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="Articles-text">
            ** You may be asked to show your flight ticket to Thai immigration
            officials on entering Thailand. If you do not possess a flight
            ticket to show that you will exit Thailand within 15 days (or 30
            days) of entry, you will most likely be refused entry.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <img src={PlanTripImage1} alt="" className="flex justify-center" />

          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">Required Documents</h1>
            </div>
            <div>
              <p className="Articles-text">
                Here are the required documents for visitors who want to enter
                Thailand with Visa on Arrival:
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {RequiredDocuments?.map((doc, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <div>{index + 1}</div>
                  <div className="flex flex-wrap gap-2">
                    <p>{doc.dec}</p>
                    <Link to={doc.link} className="text-blue-500">
                      {doc.link}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">Visa Fee</h1>
          </div>
          <div>
            <p className="Articles-text">
              The visa fee is 2,000 THB for a single entry and to be paid in
              cash only. This fee is non-refundable.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Summary</h1>

          <div className="flex flex-col gap-4">
            <div>
              <p className="Articles-text">
                You will be granted permission to enter Thailand if you qualify
                and complete the process list above. The Immigration bureau is
                responsible to ensure you meet all the requirements so best to
                be well prepared beforehand. The Visa on Arrival application
                process is very straightforward, and it can be accomplished
                quickly upon your arrival in Thailand.
              </p>
            </div>
            <div>
              <p className="Articles-text">
                People who are not eligible to enter Thailand under the Visa on
                Arrival scheme or Visa Exemption rule are required to obtain a
                visa through a Royal Thai Embassy or Consulate prior to their
                visit.
              </p>
            </div>

            <div className="flex justify-center">
              <img src={PlanTripImage2} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">
              * List of countries eligible for the Visa on Arrival
            </h1>

            <div>
              {countriesEligible?.map((countries, index) => (
                <div key={index} className="flex gap-2 flex-row justify-start">
                  <div>
                    <p className="Articles-text">{index + 1}</p>
                  </div>
                  <div className="flex flex-col md:flex-row  gap-2">
                    <div>
                      <p className="Articles-text">{countries.name}</p>
                    </div>
                    <div>
                      <p className="Articles-text">{countries.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center flex-col md:flex-row">
                <p className="Articles-text">
                  Note: If your country of nationality is not on the list,
                  please check here:
                </p>
                <div>
                  <Link to="https://www.thaiembassy.com/thailand/changes-visa-exempt.php">
                    <p className="text-blue-500 text-xl font-bold">
                      Click Here!
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={PlanTripImage3} alt="" />
            </div>
            <div>
              <h1>
                List of Thailand Immigration Checkpoints for Visa on Arrival
              </h1>
            </div>
            <div>
              {locations.map((location) => (
                <div key={location.id}>
                  <div>
                    <p>{location.id}</p>
                  </div>

                  <div>
                    <div>
                      <h3>{location.name}</h3>
                    </div>
                    <div>
                      <p>{location.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p>
                There are currency exchange counters at major airports. If a
                traveler is entering Thailand by land, it is best to exchange
                currency for Thai Baht before leaving their home country.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1>COVID and Vaccination Requirements</h1>
            </div>

            <div>
              <p>
                Visa on Arrival is issued without need of showing any proof of
                COVID vaccination.
              </p>
            </div>

            <div>
              <img src={PlanTripImage4} alt="" />
            </div>
          </div>

          <div>
            <h1>Travel Insurance for Visa on Arrival Visitors</h1>
          </div>

          <div>
            <p>
              With travel restrictions eased, Thailand removed the need for Visa
              on Arrival travelers to provide proof of a valid Covid Insurance
              policy. It is important to note that foreign visitors are not
              eligible for free medical care while in Thailand. If a foreigner
              requires medical attention, they will need to cover any expenses
              themselves.
            </p>
          </div>

          <div>
            <div>
              <p>
                Travel insurance is a wise choice for people traveling abroad.
                It not only covers Covid-related incidents but also:
              </p>
            </div>

            <div>
              {insuranceCoverage.map((insurance) => (
                <div key={insurance.id}>
                  <div>{insurance.id}</div>
                  <div>{insurance.type}</div>
                </div>
              ))}
            </div>

            <div>
              <p>
                To ensure you have the best cover possible while visiting
                Thailand and to avoid potential exclusions or conditions, choose
                Travel Insurance which is designed for Thailand.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h1>AXA Thailand: AXA Sawasdee Thailand</h1>
            </div>

            <div>
              <p>
                AXA Sawasdee Thailand is a well-known and respected insurance
                company in Thailand that caters to travelers from around the
                world. Their policies are straightforward, approved in minutes,
                and trusted by Thai authorities and medical institutions.
              </p>
            </div>

            <div>
              <div>
                <p>
                  For the best Travel Insurance for a Visa on Arrival traveler,
                  you can look to
                </p>
              </div>
              <div>
                <Link
                  to="https://direct.axa.co.th/TA-Inbound/CoverageOptionPlan?utm_source=Agent_Partner&utm_medium=Direct_SiamLegal&utm_campaign=Sawasdee_SiamLegal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AXA Thailand.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visa;

import ArticlesImage from "../../../assets/DestinationImage/Sukhothai1.jpg";
import ArticlesImage1 from "../../../assets/DestinationImage/Sukhothai2.jpg";
import ArticlesImage2 from "../../../assets/DestinationImage/Sukhothai3.jpg";
import ArticlesImage3 from "../../../assets/DestinationImage/Sukhothai4.jpg";
import ArticlesImage4 from "../../../assets/DestinationImage/Sukhothai5.jpg";
import ArticlesImage5 from "../../../assets/DestinationImage/Sukhothai6.jpg";

const DestinationArticles6 = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20">
      <div className="flex flex-col gap-6 mb-10">
        <div>
          <img src={ArticlesImage} alt="" />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gradient text-left">
            Take A Step Back In Time: Visiting The Eras Of Thailand : Sukhothai
          </h1>
        </div>

        <div>
          <div className="flex flex-col gap-6">
            <img src={ArticlesImage1} alt="" />
            <p className="text-xl font-bold">Sukhothai Historic Park</p>
            <div>
              <p className="Articles-text">
                The era of Sukhothai was the first era of Thailand and was
                founded in 1238 by King Sri Indraditya. However, the monarchy
                fell in 1438 when King Ramkhamhaeng died. King Ramkhamhaeng is
                credited with, among other things, the creation of the Thai
                script. Today, the ruins of the once bustling kingdom (whose
                name translates to “The dawn of happiness”) are available for
                viewing at Sukhothai Park in the lower northern part of
                Thailand. In addition, visitors can peruse towering Buddha
                statues, temples, and even a history museum at Sukhothai Park.
                Within the park are five different zones, each with its own
                admission fee, so arrive prepared to purchase admission to each
                zone you’d like to visit. Many of the ruins of Sukhothai Park
                are considered Khmer style, as this was one of the premier
                architectural styles that predated the Sukhothai era. This
                UNESCO World Heritage site is home to nearly 200 ruins to
                explore. Here are a few ruins to add to your must-see when
                visiting Sukhothai Park.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <img src={ArticlesImage2} alt="" />
              <p className="text-sm text-center">Wat Mahathat</p>

              <div className="flex flex-col gap-4">
                <h1 className="text-xl font-bold ">Wat Mahathat </h1>
                <p className="Articles-text">
                  Not to be confused with other Wat Mahathats, Wat Mahathat is
                  actually a common temple name throughout Thailand. It means
                  “Great relic” and can be used for any temple that houses
                  Buddha relics. It was initially constructed to hold
                  Sukhothai’s Buddha relics. Wat Mahathat was once considered
                  the main temple in Sukhothai and is a marvel to experience.
                  The city’s design is based on the shape of a mandala, which
                  symbolizes the universe. The temple consists of one main stupa
                  shaped like a lotus bud. It is surrounded by 168 stuccoed
                  sculptures of Buddhist disciples. Eight total stupas surround
                  the temple, four of which are excellent examples of Mon
                  Haripunchai – Lanna style architecture, while the others are
                  Khmer style. The main stupa is flanked by two 30-foot Buddha
                  images called Phra Attharot.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <img src={ArticlesImage3} alt="" />
                <p className="text-sm text-center">
                  King Ramkhamhaeng Monument
                </p>

                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold">
                    King Ramkhamhaeng Monument
                  </h1>
                  <p className="Articles-text">
                    This bronze sculpture commemorates King Ramkhamhaeng.​​ The
                    King is portrayed seated on a Manangkhasila Asana Throne,
                    holding a book to symbolize the King’s focus on education.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <img src={ArticlesImage4} alt="" />
                <p className="text-sm text-center">Wat Si Sawai</p>

                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold">Wat Si Sawai</h1>
                  <p className="Articles-text">
                    Surrounded by a laterite wall, Wat Si Sawai is three pagodas
                    designed with Lopburi architecture. Upon excavations at the
                    site, historians determined that the temple was initially
                    built as a Hindu temple and later repurposed as a Buddhist
                    temple. The building itself is said to predate the Sukhothai
                    empire. Today, visitors can explore Wat Si Sawai and stop to
                    reflect on its massive pond.
                  </p>

                  <div className="flex flex-col gap-2">
                    <img src={ArticlesImage5} alt="" />
                    <p className="text-sm text-center">
                      Wat Mahathat in Ayutthaya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationArticles6;

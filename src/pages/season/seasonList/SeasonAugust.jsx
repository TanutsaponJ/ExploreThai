import SeasonImage from "../../../assets/SeasonImage/August.png";
import ShareLink from "../../../utils/ShareLink";

const SeasonAugust = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20 flex flex-col gap-4 mb-10">
      <div>
        <img src={SeasonImage} alt="" />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-left text-gradient">
          Thailand : August
        </h1>
      </div>

      <ShareLink />

      <div className="flex flex-col gap-4">
        <div>
          <p className="Season-Text">
            Here comes August again, a month that visits us in the middle of the
            rainy season of every year. The atmosphere of this month, in
            addition to the drenching rain, is filled with love and affection,
            especially on Mother’s Day, the birthday of H.M. Queen Sirikit the
            Queen Mother, the Mother of all the Thai people. This is an
            opportunity for many people to Take their mother out to have Dinner
            or go on a Trip with her. You may not want to go anywhere during the
            rainy season, but we recommend that you set out to the North to
            experience the morning mist and make your August more memorable. If
            you come to Chiang Rai, you’ll get to see the Akha people celebrate
            their Akha Swing Festivalto pay gratitude to the grace of the "Um Sa
            Yae” Goddess, goddess of harvest and fertility. This festival lasts
            only 4 days from the end of August to the beginning of September. If
            you are in the mood for a new experience of life, we recommend you
            head to Chiang Rai in August.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            During the rainy season in Chiang Rai, there aren’t only traditional
            folk festivals for you to experience, but also interesting tourist
            attractions liketheHub Kao Wong Reservoir or “Pang Oung of Suphan
            Buri”. Apart from Suphan Buri, other provinces also have unrivalled
            destinations for tourists; for example, Khao Krachom in Ratchaburi
            and Khao Chong Lom in nakhon Nayok. You can also visit the park and
            walk along the natural routes in Khao Yai national park in nakhon
            Ratchasima, Nam Nao national park in Phetchabun, Pran Buri Forest
            Park in Prachuap Khiri Khan, or admire the fascinating sight of Dok
            Kra Chiao or siam Tulip Field at Sai Thong national park in
            Chaiyaphum. Moreover, you can Relax and enjoy a refreshing break at
            waterfalls like Pi Tu Kro waterfall and Thi Lo Su Waterfall in Tak,
            Man Dang waterfall in Phitsanulok and Krung Ching Waterfall in
            nakhon Si Thammarat.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            Our recommended Food for the rainy season is a hot dish to help make
            our body strong and healthy like chicken soup, pork rib soup,
            stir-fried ginger or black sesame dumplings in ginger tea. August
            also has a rich variety of fruits for you to choose: Lady Finger
            banana, Cavendish banana, guava, pineapple, langsat, longan, Custard
            Apple, sweet orange, grapefruit, star fruit, star gooseberry, etc.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            Let’s move to the highlighted activities of this month, starting
            from Rafting among the islets of the Pai River in Mae Hong Son, and
            Kaeng Hin Phoeng River in prachinburi. Don’t forget to be careful
            because Rafting in those Rivers is quite challenging! You can also
            visit Wang Bon Reservoir in nakhon Nayok to Relax and enjoy camping
            in a tent, Fishing, or Canoeing in a private and beautiful
            atmosphere.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            August can be called the month of giving jasmine, sending love to
            your mother and Dining together. However, in addition to those
            things, travelling with your mother on a Trip to amazing tourist
            destinations in Thailand is also a way to express your love to your
            mother.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeasonAugust;

import SeasonImage from "../../../assets/SeasonImage/September.png";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const SeasonSeptember = () => {
  const shareFaceBookUrl = "https://twitter.com/compose/tweet";

  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20 flex flex-col gap-4 mb-10">
      <div>
        <img src={SeasonImage} alt="" />
      </div>

      <div>
        <h1 className="text-4xl text-left font-bold text-gradient">
          Thailand : September
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">Share to</h2>
        <div>
          <FacebookShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
            <FacebookIcon className="w-8 h-auto rounded-lg" />
          </FacebookShareButton>
        </div>
        <div>
          <RedditShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
            <RedditIcon className="w-8 h-auto rounded-lg" />
          </RedditShareButton>
        </div>
        <div>
          <TwitterShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
            <TwitterIcon className="w-8 h-auto rounded-lg" />
          </TwitterShareButton>
        </div>
        <div>
          <EmailShareButton url={shareFaceBookUrl} quote={"Share Your Tips"}>
            <EmailIcon className="w-8 h-auto rounded-lg" />
          </EmailShareButton>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <p className="Season-Text">
            It’s said that September is the month that signals the end of the
            rainy season and the revival of the lively Tourism atmosphere. If
            you want to go to the sea in this month, we recommend that you go to
            the Gulf of Thailand because the monsoon season still lingers in
            AnDaman sea. You can also head North to indulge in the morning mist
            atmosphere because the Northern region of Thailand has a lot more
            than mountains and cold breeze to offer in September. One of the
            highlights is a long-lasting Tradition in Lamphun province: the
            Salak Yorm Festival. Every year, in this Tradition, unmarried young
            women will offer a Salak Yom tree as an offering to the Buddha. It’s
            believed that the young women's Salak Yom is a form of merit
            equivalent to a man's ordination. There’s another great merit-making
            Tradition in the province of Suphan Buri called Ting Kra Jard
            Festival. In this annual festival, you can donate money or useful
            items for people living in poverty. It’s a brand-new experience for
            you to discover.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            After gaining new experiences from charming Traditions, it’s time to
            explore many other tourist attractions waiting for you during the
            rainy season: visit Lom Phu Kiew (Emerald Pool) in Lampang province,
            Ban Salak in Trat province, Mo Hin Khao in Chaiyaphum province and
            Sai Yok national park in Kanchanaburi province, or admire the sea of
            mist at Phu Thap Boek and Thung Salaeng Luang in Phetchabun
            province, Doi Kiew Lom viewpoint in Mae Hong Son province, and Phu
            Soi Dao in Uttaradit province, or visit the Pa Bong Piang Rice
            Terraces in Chiang Mai province and Rice Terraces of the Royal
            Initiative Discovery Project in Nan province, or you can also head
            to the southern sea; for example, ko Tao, Ko Samui, Muk Ko Ang
            Thong, and Rajjaprabha Dam (the Guilin of Thailand) in Surat Thani
            province.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            Are you hungry now? For the Food of this month, we recommend spicy
            food to warm your cold body and boost your immune system; such as,
            Sweet Potato with Ginger soup, Stir-fried Chinese Morning Glory with
            Garlic, or hot tea. The most popular fruits are grapes, pineapple
            and guava, all are high vitamin fruits with low calories.
          </p>
        </div>
        <div>
          <p className="Season-Text">
            The highlighted activity of this month is observing an amazing
            natural phenomenon: the shrimp parade at Kaeng Lamduan in Ubon
            Ratchathani province. You’ll be fascinated by the sight of more than
            100,000 shrimp parading upstream. This phenomenon can’t be seen
            anywhere else in the world. Another highlight is tasting excellent
            coffee at Kaeng Song and Rafting along the Khek River. The coffee
            here is the Local Arabica species, original, soft and fragrant.
            After refreshing yourself with a cup of coffee, it’s time for a
            challenging Adventure: Rafting on the Khek River, the top 5 most
            popular rafting places in Thailand.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center">
            Although September is a month without any public holidays like
            others, the fascinating cultures and Traditions, including amazing
            tourist attractions that we recommend visiting in this month, are
            unrivalled.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SeasonSeptember;

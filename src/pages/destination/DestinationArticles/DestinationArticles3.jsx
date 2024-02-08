import DestinationImage from "../../../assets/DestinationImage/ChonBuri.jpg";

import ChonBuriImage from "../../../assets/DestinationImage/pattaya1.png";
import ChonBuriImage1 from "../../../assets/DestinationImage/pattaya2.png";
import ChonBuriImage2 from "../../../assets/DestinationImage/pattaya3.png";
import ChonBuriImage3 from "../../../assets/DestinationImage/pattaya4.png";
import ChonBuriImage4 from "../../../assets/DestinationImage/pattaya5.png";

const DestinationArticles3 = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto lg:px-28 px-20 flex flex-col gap-4 mb-10">
      <div>
        <img src={DestinationImage} alt="" />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-left text-gradient">
          Chon Buri
        </h1>
        <p className="Articles-text">
          Chonburi, Bangkok’s nearest seaside town, is located on the eastern
          coast of the Gulf of Thailand, only 80 kilometres from the capital.
          The area boasts abundant natural resources, which are highlighted by
          delightful Beaches, Local traditions, regional delicacies, and fresh
          Seafood. This is a popular coastal province among Bangkokians who seek
          the nearest escape from hectic weekly schedules, escaping particularly
          frequently to the seaside resort of Pattaya, though Chonburi’s
          smaller, quieter seaside towns are also quite popular with foreigners
          and Thais alike. In addition to Tourism, Chonburi is the centre of the
          Eastern Seaboard Development Project, with its industrial parks and
          Fishing villages. Tourist attractions in Chonburi, Thailand, can serve
          all types of visitors. The adventurous may choose to visit Khao Sam
          Muk, where there are a Chinese shrine and cactus Gardens on the
          hilltop and many wild monkeys along the hillsides. Chonburi is also a
          heaven for Beach lovers, with hotspots like Bang Saen, Pattaya, and ko
          Lan. Nong Mon Market is where you can shop for Local souvenirs such as
          handcrafted products and delicious foods like Ho Mok or Thai steamed
          fish curry, Khao Lam or sweet sticky rice in bamboo, sweet banana and
          taro chips, and candied fruits. Other suggested places in Chonburi
          Travel guides include JomTien Beach, Nong Nooch Tropical Garden,
          Sriracha Tiger Zoo, Prasat Sajja Tham (Sanctuary of Truth), Khao Kheow
          Open Zoo, Four Regions Floating Market, ko Si Chang, Ko Samae San, and
          Mini siam.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="my-6 ">
          <h1 className="text-4xl font-bold text-gradient">Highlights</h1>
        </div>
        <img src={ChonBuriImage} alt="" className="Articles-Image" />
        <h4 className="text-2xl font-semibold underline ">Pattaya Beach</h4>
        <h2 className="Articles-text">
          Pattaya Beach, located on the eastern coast of Thailand, is considered
          a wonderful must-visited place. Visitors can actually enjoy such a
          wealth of experiences that they will never be bored in this
          destination.
        </h2>
        <p className="Articles-text">
          Pattaya is situated in such a heavily industrial eastern seaboard
          zone, this city attracts millions of seekers from all around the
          world. Famous for its colourful nightlife, Pattaya features an array
          of options from simple to more discretionary activities which are
          available on trips to Thailand. Pattaya Beach is well-known for many
          more interesting things in this 4 km crescent of coastline than just
          sand and sea. In fact, the beach is not only the featured attraction
          but also a home of a huge number of speedboats, jet skis and parasails
          as well as floating restaurants and diving boats. Therefore, visitors
          can actually enjoy such a wealth of experiences that they will never
          be bored in this destination.
        </p>
        <div className="flex flex-col gap-4">
          <div className="w-full h-auto">
            <img src={ChonBuriImage1} alt="" className="Articles-Image" />
          </div>

          <div className="flex ">
            <div className="w-1/3 p-1">
              <img src={ChonBuriImage2} alt="" className="Articles-Image" />
            </div>
            <div className="w-1/3 p-1">
              <img src={ChonBuriImage3} alt="" className="Articles-Image" />
            </div>
            <div className="w-1/3 p-1">
              <img src={ChonBuriImage4} alt="" className="Articles-Image" />
            </div>
          </div>
        </div>

        <div>
          <p className="Articles-text">
            Pattaya’s Bay area is divided into two main beaches. Pattaya Beach,
            expanding 3 kilometers, runs parallel to Pattaya’s city centre,
            restaurants and features hotels, shops and different types of bars
            along Beach Road which faces the bay. Jomtien Beach is situated
            further south and is more serene, moreover, attracts water sport
            enthusiasts. With a nearby tower and amusement park which entertain
            children, Jomtien is a prominent choice. Separating these two
            beaches is the magnificent Buddha Hill. This is one of the highest
            points in Pattaya. The hill’s summit features the largest Buddhist
            statue found in Pattaya and a Chinese - style sacred area dedicated
            to Confucius and Lao - zi. Pattaya offers museums, galleries, theme
            parks, animal attractions, and golf courses, as well as various
            festivals and events along with beaches, tiny islands, shopping, and
            nightlife. Pattaya can easily make a great stopover for a memorable
            holiday on Thailand tours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationArticles3;

import Inspiring from "../../pages/Inspiring/Inspiring";
import Season from "../../pages/Season/Season";
import Destination from "../../pages/destination/Destination";
import Hero from "../../pages/hero/Hero";
import Promotions from "../../pages/promotion/Promotions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Inspiring />
      <Destination />
      <Promotions />
      <Season />
    </div>
  );
};

export default Home;

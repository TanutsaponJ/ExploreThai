import Inspiring from "../../pages/Inspiring/Inspiring";
import Season from "../../pages/Season/Season";
import ContactForm from "../../pages/contact/ContactForm";
import Destination from "../../pages/destination/Destination";

import Hero from "../../pages/hero/Hero";
import PlanTrip from "../../pages/plan/PlanTrip";
import Promotions from "../../pages/promotion/Promotions";

const Home = () => {
  return (
    <div>
      <Hero />
      <Inspiring />
      <Destination />
      <Promotions />
      <Season />

      <PlanTrip />
      <ContactForm />
    </div>
  );
};

export default Home;

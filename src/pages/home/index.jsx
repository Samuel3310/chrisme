import Portfolio from "../../components/Home";
import PersonalProjects from "../../components/PersonalProject";
import HomeInstagram from "../../components/Instagram/Homeinstag";
import QuickContact from "../../components/QuickContact";

import HomePages from "../../components/Header";

const Home = () => {
  return (
    <div>
      <div className="container loaded">
        <HomePages />
        <PersonalProjects />
        <Portfolio />
        <HomeInstagram />
        <QuickContact />
      </div>
    </div>
  );
};

export default Home;

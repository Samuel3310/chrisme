import Portfolio from "../../components/Home";
import PersonalProjects from "../../components/PersonalProject";
import HomeInstagram from "../../components/Instagram/Homeinstag";
import QuickContact from "../../components/QuickContact";

import HomePages from "../../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container loaded">
        <Link to="/contact" className="contact-link internal">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            enableBackground="new 0 0 20 20"
            space="preserve"
          >
            <path
              fill="#ffffff"
              d="M16,17H4a2,2,0,0,1-2-2V5A2,2,0,0,1,4,3H16a2,2,0,0,1,2,2V15A2,2,0,0,1,16,17Zm0-2V7.619l-6,4.242L4,7.619V15H16ZM4,5V5.705l6,3.429,6-3.429V5H4Z"
            ></path>
          </svg>
          <span>Contact me</span>
        </Link>

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

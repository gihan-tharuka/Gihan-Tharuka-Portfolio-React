import Profile from "../components/profile/Profile";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import Expertise from "../components/expertise/Expertise";
import Education from "../components/education/Education";

const Home = () => {
  return (
    <div className="relative">
      <Profile />
      <Portfolio />
      <Expertise />
      <Education />
      <WorkTogether />
        <Profession />
    
      <Contact />
    </div>
  );
};

export default Home;
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
      <div className="px-4 sm:px-6 md:px-12 lg:px-20">
        <Profession />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
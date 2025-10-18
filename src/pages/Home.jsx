import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import Expertise from "../components/expertise/Expertise";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Profile />
        </div>
      </div>
      {/* <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div> */}
      <Portfolio />
      <div className="introduction-profile-background">
      <Expertise />
      </div>
      
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      {/* <div className="blog-background">
        <Blog />
      </div> */}
      <div className="introduction-profile-background">
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
          <Profession />
        </div>
      </div>
  
        <Contact />
    
      {/* <HappyClients /> */}
      {/* <Testimonial /> */}
      
    </div>
  );
};

export default Home;

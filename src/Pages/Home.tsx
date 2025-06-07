import HeroSection from "../components/organism/HeroSection";
import RewatchSection from "../components/organism/RewatchSection";
import HomeLayout from "../Layout/HomeLayout";


const HomePage = () => {
  return (

    <HomeLayout>
            <HeroSection></HeroSection>
               
                <RewatchSection></RewatchSection>
    </HomeLayout>
  );
};

export default HomePage;

import HeroSection from "../components/organism/HeroSection";
import NewRilisSection from "../components/organism/NewRilisSection";
import RewatchSection from "../components/organism/RewatchSection";
import TopRatingSection from "../components/organism/TopRatingSection";
import TopTrendingSection from "../components/organism/TopTrendingSection";
import HomeLayout from "../Layout/HomeLayout";


const HomePage = () => {
    return (

        <HomeLayout>
            <HeroSection/>
            <RewatchSection/>
            <TopRatingSection/>
            <TopTrendingSection/>
            <NewRilisSection/>
        </HomeLayout>
    );
};

export default HomePage;

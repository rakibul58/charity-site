import HeroSection from "./HeroSection";
import heroImage from "../../assets/Home/HeroImage.png"
import bgImage from "../../assets/Home/communityBgImage.png"
import JoinCommunity from "./JoinCommunity";


const Home = () => {

    const  data = {
        heroData : {
            heroImage :heroImage,
        },
        joinCommunityData : {
            bgImage : bgImage,
        }
     }

     

    return (
        <div>
           <HeroSection heroData={data.heroData}/> 
            <JoinCommunity joinCommunityData={data?.joinCommunityData}/>
        </div>
    );
};

export default Home;
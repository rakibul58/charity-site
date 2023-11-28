import person1 from "../../assets/Home/person1.svg";
import person2 from "../../assets/Home/person2.svg";
import person3 from "../../assets/Home/person3.svg";
import studentCharity from "../../assets/Home/student_charity.png";
import mentorSignup from "../../assets/Home/mentor_signup.png";
import charityProfile from "../../assets/Home/charity_profile.png";
import bgCharity from "../../assets/Home/bg_charity.jpg";
import ConnectPage from "./ConnectPage";
import MakeDifferencePage from "./MakeDifferencePage";
import CreateCharityPage from "./CreateCharityPage";
import HeroSection from "./HeroSection";
import heroImage from "../../assets/Home/HeroImage.png"
import bgImage from "../../assets/Home/communityBgImage.png"
import JoinCommunity from "./JoinCommunity";
const Home = () => {

    const data = {
        connectData: {
            heading: "Connect",
            title: "Empowering Students and Experienced Adults",
            description: "Welcome to our website, where students who create charities can connect with experienced adults to receive valuable advice and guidance.",
            primaryButton: "Connect",
            secondaryButton: "Learn More",
            connectProfiles1: {
                name: "Max",
                about: "Blind person charity",
                img: person1,
            },
            connectProfiles2: {
                name: "John",
                about: "Poor people charity",
                img: person2,
            },
            connectProfiles3: {
                name: "Hena",
                about: "Nature lover charity",
                img: person3,
            },
        },
        makeDifferenceData: {
            heading: "Empowering Students and Mentors to Make a Difference",
            subHeading: "Our platform provides a space for students to seek advice and guidance for their charities, while experienced adults can sign up to mentor and provide valuable insights.",
            makeDifferenceType: [
                {
                    img: studentCharity,
                    title: "Student Charity Advice",
                    desc: "Get expert advice from mentors on how to improve your charity initiatives.",
                },
                {
                    img: mentorSignup,
                    title: "Mentor Sign-up",
                    desc: "Experienced adults can join our community to share their knowledge and support students.",
                },
                {
                    img: charityProfile,
                    title: "Charity Profiles",
                    desc: "Create a profile for your charity and showcase your impact to attract supporters.",
                },
            ]
        },
        createCharityData: {
            title: "Create Charity",
            heading: "Students can create their own charities and seek advice from experienced adults",
            firstDesc: `"Welcome to Happy Charity! Create your charity today, provide details about your organization, and make a positive impact by helping people."`,
            secondDesc: "Over 14,000+ students have established a charity through Happy Charity, guided and supported by experienced adults in the charity sector.",
            bgImg: bgCharity,
            form: {
                name: "Name",
                mobile: "Mobile Number",
                charity: "Charity Name",
                details: "Details",
                email: "Email",
                btn1: "Help",
                btn2: "Next",
            }
        },
        heroData: {
            heroImage: heroImage,
        },
        joinCommunityData: {
            bgImage: bgImage,
        },
    }
    return (
        <div>
            <HeroSection heroData={data.heroData} />
            <ConnectPage connectData={data.connectData}></ConnectPage>
            <CreateCharityPage createCharityData={data.createCharityData}></CreateCharityPage>
            <MakeDifferencePage makeDifferenceData={data.makeDifferenceData}></MakeDifferencePage>
            <JoinCommunity joinCommunityData={data?.joinCommunityData} />
        </div>
    );
};

export default Home;
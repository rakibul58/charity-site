
import Articles from "./Articles";
import starCharity from "../../assets/JoinCharity/starCharity.png";
import profile from "../../assets/JoinCharity/profile.png";
import fundraising from "../../assets/JoinCharity/fundraising.png";
import marketing from "../../assets/JoinCharity/marketing.png";
import tips from "../../assets/JoinCharity/tips.png";
import power from "../../assets/JoinCharity/power.png";
import ExpertAdvice from "./ExpertAdvice";
const JoinCharity = () => {

    const data = {

        articlesData: {
            heading: "Valuable Charity Advice",
            subHeading: "Explore resources for valuable charity advice and insights.",
            articleTypes: [
                {
                    img: starCharity,
                    title: "How to Start a Charity",
                    desc: "Learn the steps to start your own charity and make a difference.",
                    personName: "John Doe",
                    profileImage: profile,
                    date: "11 Jan 2022",
                    duration: "5 min read"
                },
                {
                    img: fundraising,
                    title: "Fundraising Strategies for Charities",
                    desc: "Discover effective fundraising strategies for your charity organization.",
                    personName: "Jane Smith",
                    profileImage: profile,
                    date: "11 Jan 2022",
                    duration: "5 min read"
                },
                {
                    img: marketing,
                    title: "Marketing Tips for Charities",
                    desc: "Learn effective marketing strategies to promote your charity.",
                    personName: "Sarah Johnson",
                    profileImage: profile,
                    date: "11 Jan 2022",
                    duration: "5 min read"
                },

            ]
        },

        expertAdviceData: {
            heading: "Expert Advice for Charities",
            subHeading: "Learn from experienced adults and mentors in the field.",
            expertAdviceTypes: [
                {
                    img: tips,
                    title: "Tips for Effective Charity Fundraising",
                    desc: "Discover strategies to raise funds and maximize impact.",
                    role : "Management",
                    duration: "5 min read"
                },
                {
                    img: power,
                    title: "The Power of Storytelling in Charity Marketing",
                    desc: "Learn how to craft compelling stories to engage donors.",
                    role : "Fundraising",
                    duration: "5 min read"
                },


            ]
        },

    }
    return (
        <div className="font-roboto">

            <Articles articlesData={data.articlesData} />
            <ExpertAdvice expertAdviceData={data.expertAdviceData}/>
        </div>
    );
};

export default JoinCharity;
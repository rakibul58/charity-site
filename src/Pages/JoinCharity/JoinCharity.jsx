import submitImg from "../../assets/JoinCharity/submitCharity.png"
import ShareCharityPage from "./ShareCharityPage";
import naturalCharity1 from "../../assets/JoinCharity/naturalcharity1.png";
import naturalCharity2 from "../../assets/JoinCharity/naturalcharity2.png";
import naturalCharity3 from "../../assets/JoinCharity/naturalcharity3.png";
import instructorImg from "../../assets/JoinCharity/classInstructor.png";
import CharityClasses from "./CharityClasses";
const JoinCharity = () => {

    const data = {
        shareCharityData: {
            title: "Share Your Charity Advice",
            desc: "Contribute to the community's knowledge base by sharing your own charity advice or experiences.",
            btn1: "Submit",
            btn2: "Learn More",
            img: submitImg,
        },
        charityClassesData: {
            title: "Charity Classes",
            categories: [
                {
                    name: "Natural Charities",
                    about: [
                        {
                            img: naturalCharity1,
                            title: "How to Start a Charity",
                            desc: "Learn the steps to start your own charity and make a difference.",
                            instructor: [
                                {
                                    name: "John Doe",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity2,
                            title: "Fundraising Strategies for Charities",
                            desc: "Discover effective fundraising strategies for your charity organization.",
                            instructor: [
                                {
                                    name: "Jane Smith",
                                    img: instructorImg,
                                    date: "11 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "Animal Charities",
                    // about: [
                    //     {
                    //         img: naturalCharity1,
                    //         title: "How to Start a Charity",
                    //         desc: "Learn the steps to start your own charity and make a difference.",
                    //         instructor: [
                    //             {
                    //                 name: "John Doe",
                    //                 img: instructorImg,
                    //                 date: "10 Jan 2022"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         img: naturalCharity2,
                    //         title: "Fundraising Strategies for Charities",
                    //         desc: "Discover effective fundraising strategies for your charity organization.",
                    //         instructor: [
                    //             {
                    //                 name: "Jane Smith",
                    //                 img: instructorImg,
                    //                 date: "11 Jan 2022"
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         img: naturalCharity3,
                    //         title: "Marketing Tips for Charities",
                    //         desc: "Learn effective marketing strategies to promote your charity.",
                    //         instructor: [
                    //             {
                    //                 name: "Sarah Johnson",
                    //                 img: instructorImg,
                    //                 date: "10 Jan 2022"
                    //             }
                    //         ]
                    //     },
                    // ]
                },
                {
                    name: "Food Charities",
                    about: [
                        {
                            img: naturalCharity1,
                            title: "How to Start a Charity",
                            desc: "Learn the steps to start your own charity and make a difference.",
                            instructor: [
                                {
                                    name: "John Doe",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity2,
                            title: "Fundraising Strategies for Charities",
                            desc: "Discover effective fundraising strategies for your charity organization.",
                            instructor: [
                                {
                                    name: "Jane Smith",
                                    img: instructorImg,
                                    date: "11 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "Water Charities",
                    about: [
                        {
                            img: naturalCharity1,
                            title: "How to Start a Charity",
                            desc: "Learn the steps to start your own charity and make a difference.",
                            instructor: [
                                {
                                    name: "John Doe",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity2,
                            title: "Fundraising Strategies for Charities",
                            desc: "Discover effective fundraising strategies for your charity organization.",
                            instructor: [
                                {
                                    name: "Jane Smith",
                                    img: instructorImg,
                                    date: "11 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "Home Charities",
                    about: [
                        {
                            img: naturalCharity1,
                            title: "How to Start a Charity",
                            desc: "Learn the steps to start your own charity and make a difference.",
                            instructor: [
                                {
                                    name: "John Doe",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity2,
                            title: "Fundraising Strategies for Charities",
                            desc: "Discover effective fundraising strategies for your charity organization.",
                            instructor: [
                                {
                                    name: "Jane Smith",
                                    img: instructorImg,
                                    date: "11 Jan 2022"
                                }
                            ]
                        },
                        {
                            img: naturalCharity3,
                            title: "Marketing Tips for Charities",
                            desc: "Learn effective marketing strategies to promote your charity.",
                            instructor: [
                                {
                                    name: "Sarah Johnson",
                                    img: instructorImg,
                                    date: "10 Jan 2022"
                                }
                            ]
                        },
                    ]
                }],
        }
    }
    return (
        <div className="font-roboto">
            <CharityClasses charityClassesData={data?.charityClassesData} />
            <ShareCharityPage shareCharityData={data.shareCharityData} />
        </div>
    );
};

export default JoinCharity;
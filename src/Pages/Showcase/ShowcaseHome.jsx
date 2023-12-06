import ShowCaseFaqs from "./ShowCaseFaqs";
import ShowCaseHero from "./ShowCaseHero";





const ShowcaseHome = () => {

    const data = {


      
        showCaseHeroData: {
            title: "Showcase Your Charities",
            subTitle: "Share your created charities and seek advice from experienced adults."
        },
      
        ShowCaseFaqsData : {
            description : "Find answers to common questions about the sign-up process and your role as a mentor on our platform.",
            questions : {
        
                rows: [
                    {
                        title: "How do I join?",
                        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                          ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                          In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                          Fusce sed commodo purus, at tempus turpis.`,
                    },
                    {
                        title: "How can I create a charity?",
                        content:
                            "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
                    },
                    {
                        title: "How can I get advice?",
                        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                        Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                        Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
                    },
                    {
                        title: "How can I support others?",
                        content: "current version is 1.2.1"
                    },
                    {
                        title: "How do I contact you?",
                        content: "current version is 1.2.1"
                    },
                ],
            }

        }


    }
    return (
        <div className="font-roboto mx-[20px]">
            <ShowCaseHero showCaseHeroData={data?.showCaseHeroData}/>
            <ShowCaseFaqs ShowCaseFaqsData={data?.ShowCaseFaqsData}/>
                  
        </div>
    );
};

export default ShowcaseHome;


import { Link } from "react-router-dom";



const BecomeMentorHero = ({ becomeMentorHeroData }) => {


    return (
        <div className=" mt-[70px] mx-[30px] text-[#0E286C]">
            <p className="text-base font-semibold">Empower</p>
            <h1 className="text-[56px] font-bold">{becomeMentorHeroData?.title}</h1>
            <p className="text-lg font-normal mb-8">{becomeMentorHeroData?.subTitle}</p>
            <div className="flex gap-5">
                <Link to=""
                    style={{
                        borderRadius: "8px",
                        background: "#0E286C",
                        boxShadow: "0px 4px 10px 0px rgba(169, 169, 169, 0.25)"
                    }}
                    className="px-[25px] py-[10px] text-xl font-bold text-[#fff]"
                >Sign up</Link>
                <Link to=""
                    style={{
                        borderRadius: "8px",
                        border: "1px solid #0E286C",
                        boxShadow: "0px 4px 10px 0px rgba(169, 169, 169, 0.25)"
                    }}
                    className="px-[25px] py-[10px] text-xl font-bold text-[#0E286C] hover:bg-[#0E286C] hover:text-[#fff]"
                >Learn more</Link>
            </div>

        </div>
    );
};

export default BecomeMentorHero;
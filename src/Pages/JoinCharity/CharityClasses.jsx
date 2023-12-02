import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const CharityClasses = ({ charityClassesData }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const handleCategoryClick = (index) => {
        setActiveCategory(index);
    };

    return (
        <div className="w-11/12 mx-auto my-[30px]">
        <h1 className="text-[24px] font-bold border-b-2 border-[#FFC062] py-[4px] w-full">
            {charityClassesData?.title}
        </h1>
        <Tabs>
            <TabList className="flex gap-8 mt-6 ">
                {charityClassesData?.categories?.map((category, index) => (
                    <Tab
                    className={`text-[20px] font-semibold cursor-pointer p-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out rounded-lg ${
                        activeCategory === index ? 'bg-[#E5ECFF] border rounded-lg border-[#0E286C] text-[#0E286C]' : ''
                    }`}
                    selected={activeCategory === index}
                    key={index}
                    onClick={() => handleCategoryClick(index)}
                >
                    {category.name}
                </Tab>
                ))}
            </TabList>


            {charityClassesData?.categories?.map((category, index) => (
                <TabPanel key={index}>
                    <Swiper
                        slidesPerView={3}
                        cssMode={true}
                        navigation={true}
                        grabCursor={true}
                        pagination={{
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class="${className} bg-indigo-500 rounded-full text-[20px] font-bold">${index + 1}</span>`;
                            },
                        }}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper relative p-4" // Added padding to the Swiper component
                    >
                        {category?.about?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="relative mb-[70px] w-5/6 mx-auto mt-4 border rounded-md shadow-md h-[450px]">
                                    <img className='h-[242px] w-full' src={item.img} alt={item.title} />
                                    <div className='w-11/12 mx-auto my-5'>
                                    <h3 className='text-[#0E286C] font-bold text-[20px]'>{item.title}</h3>
                                    <p className='text-[13px] w-[310px]'>{item.desc}</p>
                                    <div className='flex gap-4 mt-3 items-center'>
                                    <img src={item.instructor[0]?.img} alt="" />
                                    <div>
                                    <p>Instructor: {item.instructor[0].name}</p>
                                    <p>Date: {item.instructor[0].date}</p>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </TabPanel>
            ))}
        </Tabs>
    </div>
    );
};

export default CharityClasses;

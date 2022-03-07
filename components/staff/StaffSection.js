import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import StaffCard from "./StaffCard";
import { Navigation } from 'swiper';
const staffList = [
    {
        "name" : "Tony Stark",
        "task" : "Real Estate Agent",
        "phone":"+44 765 342 312",
        "image": "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_1.jpg"
    },
    {
        "name" : "Bob Haris",
        "task" : "Sales Executive",
        "phone":"+44 078 767 595",
        "image": "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_2.jpg"
    },
    {
        "name" : "Jim Karry",
        "task" : "Real Estate Broker",
        "phone":"+44 055 847 538",
        "image": "http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_3.jpg"
    },
    {
        "name" : "Alfred Jhon",
        "task" : "Sales Executive",
        "phone":"+44 078 767 598",
        "image":"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_4.jpg"
    },
    {
        "name" : "Boris Baker",
        "task" : "Real Estate Agent",
        "phone":"+44 321 445 678",
        "image":"http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_8.jpg"
    }
]

const StaffSection = (props) => {
    const swiper = useSwiper();
    return (
        <div className="staffSlider">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                navigation
                slidesPerView={"auto"}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    staffList.map((item,index)=>(
                        <SwiperSlide key={index} style={{width:"277px"}}>
                            <StaffCard data={item}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

StaffSection.propTypes = {};
StaffSection.defaultProps = {};

export default StaffSection;

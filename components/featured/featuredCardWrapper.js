import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FeaturedCard from "./FeaturedCard";

const featuredCardWrapper = (props) => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><FeaturedCard/></SwiperSlide>
                <SwiperSlide><FeaturedCard/></SwiperSlide>
                <SwiperSlide><FeaturedCard/></SwiperSlide>
                <SwiperSlide><FeaturedCard/></SwiperSlide>

            </Swiper>
        </div>
    );
};


export default featuredCardWrapper;

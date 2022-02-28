import React from 'react';
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from "../advert/Card";
import img from "../../public/images/advert/property_7.jpg";

const dataItems = [
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    }
];

SwiperCore.use([Pagination]);

const RecentPropertySlider = (props) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                dataItems.map((item, index) =>(
                    <SwiperSlide key={index}><Card classAttr="col-12" data={item}/></SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default RecentPropertySlider;

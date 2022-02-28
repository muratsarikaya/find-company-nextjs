import React from 'react';
import LazyLoad from "react-lazyload"
import styles from "./whyWe.module.css"
import img1 from "../../public/images/whyWe/icon/property_listing.png"
import img2 from "../../public/images/whyWe/icon/rent.png"
import img3 from "../../public/images/whyWe/icon/customer_support.png"
import img4 from "../../public/images/whyWe/icon/deal_1.png"

const whyList = [
    {
        'title': 'Kişiselleştirilmiş servis',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img1
    },
    {
        'title': 'Finansman kolaylaştı.',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img2
    },
    {
        'title': '7/24 destek.',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img3
    },
    {
        'title': 'Binlerce kişi tarafından güvenildi.',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img4
    },
];
const WhyWeListItem = (props) => {
    return (
        <>
            {
                whyList.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="col-2">
                            <LazyLoad>
                                <img className={` ${styles.why_we_list_img} w-100`} src={item.img.src} alt="title"/>
                            </LazyLoad>
                        </div>
                        <div className="col-10">
                            <div className={styles.why_we_list_title}>
                                <h3>{item.title}</h3>
                            </div>
                            <div className={styles.why_we_list_context}>
                                <p>{item.context}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    );
};


export default WhyWeListItem;

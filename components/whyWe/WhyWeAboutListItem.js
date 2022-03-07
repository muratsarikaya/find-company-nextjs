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
        'img': img1,
        'backgroundColor': "#6449e7",
        'color':'#fff'
    },
    {
        'title': 'Finansman kolaylaştı.',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img2,
        'backgroundColor': "",
        'color':''
    },
    {
        'title': '7/24 destek.',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img3,
        'backgroundColor': "",
        'color':''
    },
    {
        'title': 'Binlerce kişi tarafından güvenildi.',
        'context': 'Lorem ipsum dolor sit amet, conectetur adipisicing elit. Quibusdam, aspernatur.',
        'img': img4,
        'backgroundColor': "#FA6742",
        'color':'#fff'
    },
];
const WhyWeAboutListItem = (props) => {
    return (
        <div className="row">
            {
                whyList.map((item, index) => (
                    <div className="col-6" key={index}>
                        <div className={`${styles.why_we_about_feature_item} row`} key={index} style={{background: item.backgroundColor}}>
                            <div className="col-12">
                                <LazyLoad>
                                    <img className={` ${styles.why_we_list_img} w-100`} src={item.img.src} alt="title"/>
                                </LazyLoad>
                            </div>
                            <div className="col-12">
                                <div className={styles.why_we_list_title}>
                                    <h3 style={{color: item.color}}>{item.title}</h3>
                                </div>
                                <div className={styles.why_we_list_context}>
                                    <p style={{color: item.color}}>{item.context}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    );
};


export default WhyWeAboutListItem;

import React from 'react';
import Link from "next/link";
import LazyLoad from "react-lazyload"
import Badge from "../common/Badge";
import Icon from "../common/Icon";
import styles from "./realEstate.module.css"

const RealEstateCard = (props) => {
    return (
        <div className={props.column}>
            <Link href="/">
                <a>
                    <div className={styles.real__estate_wrap}>
                        <div className={styles.real__estate_img}>
                            <LazyLoad>
                                <img className="w-100" src="http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/places/place_10.jpg" alt=""/>
                            </LazyLoad>
                        </div>
                        <div className={styles.real_estate_place_title}>
                            <Badge bgColor="#fff" color="#333" setValue="HAVANA"/>
                        </div>
                        <div className={styles.real__estate_context}>
                            <div><h3>80 Emlak Listesi</h3></div>
                            <div className={styles.real_estate_all_show}>Tüm İlanları Gör <Icon classStyle="fa fa-long-arrow-right ms-2" size="16"/></div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};


export default RealEstateCard;

import React from 'react';
import LazyLoad from "react-lazyload"
import Link from "next/link";
import styles from "./featuredCard.module.css"
import img from "../../public/images/advert/property_7.jpg";
import Badge from "../common/Badge";

const FeaturedCard = (props) => {
    return (
        <div className={styles.featured__card}>
            <Link href="/"><a>
                <LazyLoad>
                    <img className="w-100"
                         src="http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/featured/featured_10.jpg"
                         alt=""/>
                </LazyLoad>
                <div className={`${styles.advert__ctg_badge} text-end`}>
                    <Badge bgColor="#6449e7" setValue="Featured"/>
                    <Badge bgColor="#FA6742" setValue="For Sale"/>
                </div>
                <div className={styles.featured__card_text_wrapper}>
                    <h2 className={`${styles.featured__card_title} mb-4`}>Family Apartment</h2>
                    <div className="mb-2">
                        <span className={styles.splash}>4 Yatak</span>
                        <span className={styles.splash}>1 Banyo</span>
                        <span className={styles.splash}>2400 m2</span>
                    </div>
                    <div>
                        <span className={styles.featured__card_price}>$1200 / </span>
                        <span className={styles.featured__card_unit}>Month</span>
                    </div>
                </div>

            </a>
            </Link>
        </div>
    );
};


export default FeaturedCard;

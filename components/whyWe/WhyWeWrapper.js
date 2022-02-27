import React from 'react';
import WhyWeListItem from "./WhyWeListItem";
import LazyLoad from "react-lazyload"
import imgIcon from "../../public/images/whyWe/icon/property_listing.png"
import styles from "./whyWe.module.css"

const WhyWeWrapper = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <LazyLoad>
                        <img className={`${styles.why_we_section_img} w-100`} src="http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/property/Property-1.jpg" alt=""/>
                    </LazyLoad>
                </div>
                <div className="col-6">
                    <WhyWeListItem/>
                </div>
            </div>
        </div>
    );
};


export default WhyWeWrapper;

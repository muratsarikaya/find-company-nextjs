import React from 'react';
import FeaturedCard from "./FeaturedCard";
import FeaturedCardWrapper from "./featuredCardWrapper"
import styles from "./featuredCard.module.css"
import TitleSection from "../common/TitleSection";

const FeaturedWrapper = (props) => {
    return (
        <section className={styles.featured__property_section}>
            <div className="row me-1">
                <div className="col-3 featured__title d-flex justify-content-center flex-column">
                    <TitleSection statusClass="text-center" title1="Öne Çıkan Özellikleri" title2="Öne Çıkan İlanlarımıza Göz Atın"/>
                </div>
                <div className="col-9">
                    <FeaturedCardWrapper/>
                </div>
            </div>
        </section>
    );
};


export default FeaturedWrapper;

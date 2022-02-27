import React from 'react';
import styles from "./RecentProperty.module.css";
import TitleSection from "../common/TitleSection";
import RecentPropertySlider from "./RecentPropertySlider";

const RecentPropertySection = (props) => {
    return (
        <section className={`${styles.recent_property_section} slider-section`}>
            <div className="container">
                <TitleSection statusClass="text-center" title1="Son Mülkler" title2="Bazılarımıza göz atın"/>
                <div  className="mt-5">
                    <div className="row">
                        <RecentPropertySlider/>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default RecentPropertySection;

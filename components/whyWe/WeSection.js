import React from 'react';
import styles from "./whyWe.module.css";
import TitleSection from "../common/TitleSection";
import RealEstateWrapper from "../realEstate/RealEstateWrapper";
import WhyWeWrapper from "./WhyWeWrapper";

const WeSection = (props) => {
    return (
        <section className={styles.why_we_section}>
            <div className="container py-5 ps-0 ms-0">
                <TitleSection statusClass="text-center pb-5" title1="Neden Bizi Seçmelisiniz" title2="Lorem ipsum dolor otur."/>
                <div>
                    <div className="row">
                        <WhyWeWrapper/>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default WeSection;

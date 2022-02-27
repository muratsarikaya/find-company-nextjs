import React from 'react';
import styles from "./realEstate.module.css"
import TitleSection from "../common/TitleSection";
import RealEstateWrapper from "./RealEstateWrapper";

const RealEstateSection = (props) => {
    return (
        <section className={styles.real_estate_section}>
            <div className="container">
                <TitleSection statusClass="text-center" title1="Şehrinizdeki Emlakları Bulun" title2="Dünyadaki popüler mülklere göz atın"/>
                <div>
                    <div className="row">
                        <RealEstateWrapper/>
                    </div>
                </div>

            </div>
        </section>
    );
};


export default RealEstateSection;

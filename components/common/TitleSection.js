import React from 'react';
import styles from "../featured/featuredCard.module.css";

const TitleSection = (props) => {
    return (
        <div className={props.statusClass}>
            <h4 className={styles.featured__title_2}>{props.title2}</h4>
            <h2 className="featured__title_1">{props.title1}</h2>
        </div>
    );
};

export default TitleSection;

import React from 'react';
import styles from "./Header.module.css";
import Link from "next/link";
const Logo = (props) => {
    return (
        <Link href="/"><a className={`${styles.logo__text} text-center` } style={{color: props.color}} >GL<i className="fa fa-globe" aria-hidden="true"></i>BAL</a></Link>
    );
};

Logo.defaultProps = {
    color: "#271e00"
};

export default Logo;

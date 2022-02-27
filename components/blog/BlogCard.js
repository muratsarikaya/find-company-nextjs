import React from 'react';
import styles from "./blogCart.module.css";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import img from "../../public/images/advert/property_7.jpg";

const BlogCard = (props) => {
    return (
        <div className={props.classAttr}>
            <div className={styles.blog__card}>
                <Link href="/"><a>
                    <LazyLoad>
                        <img className="w-100"
                             src={props.data.img}
                             alt=""/>
                    </LazyLoad>
                    <div className={styles.blog__card_context}>
                        <div className={styles.blog__category}>{props.data.category}</div>
                        <div className={styles.card_title}>
                            <h2>{props.data.title}</h2>
                        </div>
                    </div>
                    <div className={styles.bottom_content}><span>{props.data.day}</span> / {props.data.date}</div>
                </a>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;

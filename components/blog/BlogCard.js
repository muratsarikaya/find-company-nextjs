import Image from "next/image";
import styles from "./blogCart.module.css";
import Link from "next/link";
import LazyLoad from "react-lazyload";

const BlogCard = (props) => {
    return (
        <div className={props.classAttr}>
            <div className={styles.blog__card}>
                <Link href="/"><a>
                    <LazyLoad>
                        <Image src={props.data.image} className="w-100" layout="responsive" width="750" height="500"
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

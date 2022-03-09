import Link from "next/link";
import breadcrumbImg from "../../public/images/breadcrumb/breadcrumb_1.jpg"
import styles from "./breadcrumb.module.css"

const Breadcrumb = (props) => {
    return (
        <section className={`${styles.breadcrumb__section} ${styles.bg_h}`}
                 style={{backgroundImage: `url(${breadcrumbImg.src})`}}>
            <div className={`${styles.overlay}  ${styles.op_5} `}/>
            <div className={`${styles.position_relative} container`}>
                <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                        <div className={styles.breadcrumb_menu}>
                            <h1>{props.breadcrumbData.title}</h1>
                            <span><Link href="/"><a>Anasayfa</a></Link></span>
                            <span>{props.breadcrumbData.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;

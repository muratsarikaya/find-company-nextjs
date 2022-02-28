import styles from "./videoSection.module.css"
import TitleSection from "../common/TitleSection";

const VideoSectionOne = (props) => {
    return (
        <div className={styles.video_section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <TitleSection statusClass="text-center"
                                      title1="SEVECEĞİNİZ BİR YER BULMANIZA YARDIMCI OLACAĞIZ."
                                      title2="Her yerde kiralık mülk bulun"/>
                        <p>Lorem ipsum dolor sit amet, conectetur adipisicing elit. Doğal olarak en uygun koşullara
                            tabidir. Consectetur quasi natus quia facilis corporis quibusdam ut non laudantium
                            recusandae fugiat rerum ab aliquid accusamus cumque quae, illum id voluptatem ducimus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default VideoSectionOne;

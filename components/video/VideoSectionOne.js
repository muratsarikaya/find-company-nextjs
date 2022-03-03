import {useState} from "react"
import styles from "./videoSection.module.css"
import TitleSection from "../common/TitleSection";
import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import VideoCard from "./VideoCard";

const VideoSectionOne = (props) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={styles.video__section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <VideoCard/>
                    </div>
                    <div className="col-md-6">
                        <TitleSection statusClass="text-center"
                                      title1="SEVECEĞİNİZ BİR YER BULMANIZA YARDIMCI OLACAĞIZ."
                                      title2="Her yerde kiralık mülk bulun"/>
                        <div className={styles.about__text}>
                            <p>Lorem ipsum dolor sit amet, conectetur adipisicing elit. Doğal olarak en uygun koşullara
                                tabidir. Consectetur quasi natus quia facilis corporis quibusdam ut non laudantium
                                recusandae fugiat rerum ab aliquid accusamus cumque quae, illum id voluptatem
                                ducimus</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default VideoSectionOne;

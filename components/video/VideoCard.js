import LazyLoad from "react-lazyload";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";
import styles from "./videoSection.module.css"
import PlayButton from "./PlayButton";

const VideoCard = (props) => {
    return (
        <>
            <a
                href="https://youtu.be/f21S_UKJ97k"
                data-fancybox
                data-type="iframe"
                data-preload="false"
                data-width="640"
                data-height="480"
            >
                <div className={styles.image_wrapper}>
                    <LazyLoad style={{width: '100%', height: '400px', position: 'relative'}}>
                        <Image layout="fill"  src="http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/bg/about.jpg" />
                    </LazyLoad>
                    <PlayButton/>
                </div>

            </a>
        </>
    );
};

export default VideoCard;

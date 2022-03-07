import styles from './staffStyle.module.css'
import Image from "next/image";
import Icon from "../common/Icon";
import LazyLoad from "react-lazyload";

const StaffCard = (props) => {
    return (
        <div className={styles.staff__wrapper}>
            <div className="staffImg">
                <LazyLoad>
                    <Image src={props.data.image} width="277" height="292" objectFit="contain"/>
                </LazyLoad>
            </div>
            <div>
                <div className={styles.staffInformation}>
                    <h4 className={styles.staffName}>{props.data.name}</h4>
                    <div className={styles.staffTask}>{props.data.task}</div>
                    <div className={styles.staffPhone}><a href="tel:"><Icon classStyle="fa fa-phone" color="#6449e7" size="19"/>{props.data.phone}</a></div>
                </div>
            </div>
        </div>
    );
};



export default StaffCard;

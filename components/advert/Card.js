import Image from "next/image";
import LazyLoad from "react-lazyload"
import styles from './advert.module.css'
import Icon from "../common/Icon";
import {Rate} from 'antd';
import Badge from "../common/Badge"


const Card = (props) => {
    return (
        <>
            <div className={props.classAttr}>
                <div className={`${styles.advert__cart} ${props.cardStatus === "horizontal" && "row" }`}>
                    <div className={`${styles.advert__cart_top} ${props.cardStatus === "horizontal" && "col-md-6 px-0" }`}>
                        <LazyLoad>
                            <Image className="w-100" src={props.data.image} alt="" width="750" height="500" layout="responsive"/>
                        </LazyLoad>
                        <div className={`${styles.advert__ctg_badge} text-end`}>
                            <Badge bgColor="#6449e7" setValue="Featured"/>
                            <Badge bgColor="#FA6742" setValue="For Sale"/>
                        </div>
                        <div className={styles.advert__cart_event}>

                        </div>
                    </div>
                    <div className={`${styles.advert__cart_bottom} ${props.cardStatus === "horizontal" && "col-md-6" }`}>
                        <div>
                            <h4 className={styles.property__title_box}>{props.data.title}</h4>
                        </div>
                        <div className="property__location d-flex">
                            <Icon classStyle="fa fa-map-marker" color="#6449e7" size="19"/>
                            <span className="ms-2">{props.data.address}</span>
                        </div>
                        <div className={styles.property__feature}>
                            <div className="row mb-3">
                                <div className="col-6 d-flex">
                                    <Icon classStyle="fa fa-bed" color="#ddd" size="16"/>
                                    <span className="ms-2">{props.data.roomNumber}</span>
                                </div>
                                <div className="col-6 d-flex">
                                    <Icon classStyle="fa fa-arrows" color="#ddd" size="16"/>
                                    <span className="ms-2">{props.data.area}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6 d-flex">
                                    <Icon classStyle="fa fa-bath" color="#ddd" size="16"/>
                                    <span className="ms-2">{props.data.bath}</span>
                                </div>
                                <div className="col-6 d-flex">
                                    <Icon classStyle="fa fa-car" color="#ddd" size="16"/>
                                    <span className="ms-2">{props.data.garage}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.trending__bottom}>
                            <div className="row">
                                <div className="col-6">
                                    <Rate allowHalf defaultValue={2.5}/>
                                </div>
                                <div className="col-6 d-flex align-items-center justify-content-end">
                                    <span
                                        className={styles.card__price}>{props.data.price}</span> / <span>{props.data.unit}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;

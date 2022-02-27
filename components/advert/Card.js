import LazyLoad from "react-lazyload"
import styles from './advert.module.css'
import Icon from "../common/Icon";
import { Rate } from 'antd';
import img from "../../public/images/advert/property_7.jpg"
import Badge from "../common/Badge"
const dataItems = [
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    },
    {
        "belong": "Carmen Properties",
        "title": "Villa on Sunbury",
        'address': '39 Casey Ave, Sunbury, VIC 3429',
        'roomNumber': '5 Bedrooms',
        'bath': '4 Bath',
        'garage': ' 2 Garage',
        'area': '2048 sq ft',
        'price': '$9200',
        'unit': 'Mont',
        'rating': "5",
        'advertStatus': ['Featured', 'For Rent'],
        'image': img
    }
];

const Card = (props) => {
    return (
        <>
            {
                dataItems.map((item, index) => (
                    <div className="col-4" key={index}>
                        <div className={styles.advert__cart}>
                            <div className={styles.advert__cart_top}>
                                <LazyLoad>
                                    <img className="w-100" src={item.image.src} alt=""/>
                                </LazyLoad>
                                <div className={`${styles.advert__ctg_badge} text-end`} >
                                    <Badge bgColor="#6449e7" setValue="Featured"/>
                                    <Badge bgColor="#FA6742" setValue="For Sale"/>
                                </div>
                                <div className={styles.advert__cart_event}>

                                </div>
                            </div>
                            <div className={styles.advert__cart_bottom}>
                                <div>
                                    <h4 className={styles.property__title_box}>{item.title}</h4>
                                </div>
                                <div className="property__location d-flex">
                                    <Icon classStyle="fa fa-map-marker" color="#6449e7" size="19"/>
                                    <span className="ms-2">{item.address}</span>
                                </div>
                                <div className={styles.property__feature}>
                                    <div className="row mb-3">
                                        <div className="col-6 d-flex">
                                            <Icon classStyle="fa fa-bed" color="#ddd" size="16"/>
                                            <span className="ms-2">{item.roomNumber}</span>
                                        </div>
                                        <div className="col-6 d-flex">
                                            <Icon classStyle="fa fa-arrows" color="#ddd" size="16"/>
                                            <span className="ms-2">{item.area}</span>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-6 d-flex">
                                            <Icon classStyle="fa fa-bath" color="#ddd" size="16"/>
                                            <span className="ms-2">{item.bath}</span>
                                        </div>
                                        <div className="col-6 d-flex">
                                            <Icon classStyle="fa fa-car" color="#ddd" size="16"/>
                                            <span className="ms-2">{item.garage}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.trending__bottom}>
                                    <div className="row">
                                        <div className="col-6">
                                            <Rate allowHalf defaultValue={2.5} />
                                        </div>
                                        <div className="col-6 d-flex align-items-center justify-content-end">
                                            <span className={styles.card__price}>{item.price}</span> / <span>{item.unit}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Card;

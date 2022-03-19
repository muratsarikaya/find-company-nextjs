
import { useState } from "react";
import styles from "../post-ad/postAd.module.css";
import {Form} from "reactstrap";
import Select from "react-dropdown-select";
import Card from "../advert/Card";
import img from "../../public/images/advert/property_7.jpg";
import Button from "../common/Button";
import {Input, Slider, Switch, InputNumber} from 'antd';


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

const Countries = [
    {label: "Türkiye", value: 90},
    {label: "Argentina", value: 54},
    {label: "Austria", value: 43},
    {label: "Cocos Islands", value: 61},
    {label: "Kuwait", value: 965},
    {label: "Sweden", value: 46},
    {label: "Venezuela", value: 58}
];

const PropertyStatus = [
    {label: "Tümü", value: "Tümü"},
    {label: "Kiralık", value: "Kiralık"},
    {label: "Satılık", value: "Satılık"},
]

const roomCount = [
    {label: "1", value: "1"},
    {label: "2", value: "2"},
    {label: "3", value: "3"},
    {label: "4", value: "4"},
    {label: "5", value: "5"},
    {label: "6", value: "6"},
    {label: "7", value: "7"},
]

const {disabled} = false;


const PostAdListPage = (props) => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(10000);
    const sliderOnChange = (values) => {
        setMin(values[0]);
        setMax(values[1]);
    };

    return (
        <>
            <section className={styles.postAdPage__list_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Form className="postAd__filter">
                                <div className={styles.input__title}>Ülke</div>
                                <Select className={`${styles.react_dropdown_select_input} mb-4`}
                                        options={Countries}
                                        values={[{label: "Türkiye", value: 90}]}
                                        onChange={(value) => console.log(value)}
                                />
                                <div className={styles.input__title}>Mülk Durumu</div>
                                <Select className={`${styles.react_dropdown_select_input} mb-4`}
                                        options={PropertyStatus}
                                        values={[{
                                            value: 'Tümü',
                                            label: 'Tümü'
                                        }]}
                                        onChange={(value) => console.log(value)}
                                />
                                <div className={styles.input__title}>Oda Sayısı</div>
                                <Select className={`${styles.react_dropdown_select_input} mb-4`}
                                        options={roomCount}
                                        values={[{
                                            value: 'Tümü',
                                            label: 'Tümü'
                                        }]}
                                        onChange={(value) => console.log(value)}
                                />
                                <div className={styles.input__title}>Aranacak Kelime</div>
                                <Input className="mb-4" placeholder="Kelime" style={{height: "45px"}}/>
                                <div className={styles.input__title}>Fiyat Aralığı</div>
                                <div className="price__range_block mb-4">
                                    <Slider  min={1} max={10000} range step={1} defaultValue={[1, 10000]} disabled={disabled} onChange={sliderOnChange}/>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <div className={styles.input__title}>Min</div>
                                            <InputNumber min="1" max="10000" className="mb-4" value={min} style={{height: "45px", width: "80%"}}/>
                                        </div>
                                        <div className="text-end">
                                            <div className={styles.input__title}>Max</div>
                                            <InputNumber min="1" max="10000" className="mb-4" value={max} style={{height: "45px", width: "80%"}}/>
                                        </div>

                                    </div>

                                </div>

                                <Button margin="0" width="100%" height="46px" primary="#6449e7" textColor="#fff"
                                        setValue="Ara"/>
                            </Form>
                        </div>
                        <div className="col-md-9">
                            <div className="row ps-3">
                                {
                                    dataItems.map((item, index) => (
                                        <Card cardStatus="horizontal" key={index} classAttr="col-12 mb-4" data={item}/>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};


export default PostAdListPage;

import React from 'react';
import Logo from "./Logo";
import UsersDropdown from "./UsersDropdown";
import LazyLoad from 'react-lazyload';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css/effect-coverflow";
import {EffectCoverflow, Pagination} from "swiper";
import 'swiper/css';
import styles from "./Header.module.css"

import {Form, Input, Button, Select} from 'antd';

const {Option} = Select;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};
const Header = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log(values);
    };
    const slider = [
        {
            imgUrl: "https://images.wallpaperscraft.com/image/single/night_city_aerial_view_lights_city_134887_1920x1080.jpg"
        },
        {
            imgUrl: "https://images.wallpaperscraft.com/image/single/night_city_city_lights_aerial_view_137133_1920x1080.jpg"
        },
        {
            imgUrl: "https://images.wallpaperscraft.com/image/single/night_city_city_lights_aerial_view_137133_1920x1080.jpg"
        }
    ];

    return (
        <header>
            <div style={{background: "#fdc600", position: "relative"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <div>
                                <UsersDropdown/>
                            </div>
                        </div>
                        <div className="col-4 text-center">
                            <Logo/>
                        </div>
                        <div className="col-4 text-md-end">
                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div className={styles.header__filter}>
                    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <Form.Item
                                        name="keyword"
                                        rules={[{ required: true, message: 'Anahtar Kelime Zorunludur!' }]}
                                    >
                                        <Input placeholder="Arama" style={{height: "40px"}}/>
                                    </Form.Item>
                                </div>
                                <div className="col-3">
                                    <Form.Item
                                        name="location"
                                        rules={[{ required: true, message: 'Lütfen Lokasyon Giriniz!' }]}
                                    >
                                        <Select
                                            className="header__filter_input"
                                            showSearch
                                            style={{width: "100%", height: "40px"}}
                                            placeholder="Lokasyon Seçiniz"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                            filterSort={(optionA, optionB) =>
                                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                            }
                                        >
                                            <Option value="1">İstanbul</Option>
                                            <Option value="2">Ankara</Option>
                                            <Option value="3">Antalya</Option>
                                            <Option value="4">Adana</Option>
                                            <Option value="5">İzmir</Option>
                                        </Select>
                                    </Form.Item>

                                </div>
                                <div className="col-4 d-flex">
                                    <Form.Item
                                        style={{width:"100%"}}
                                        name="category"
                                        rules={[{ required: true, message: 'Lütfen Kategori Giriniz!' }]}
                                    >
                                        <Select
                                            className="header__filter_input"
                                            showSearch
                                            style={{width: "100%"}}
                                            placeholder="Kategori Seçiniz"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                            }
                                            filterSort={(optionA, optionB) =>
                                                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                            }
                                        >
                                            <Option value="1">İstanbul</Option>
                                            <Option value="2">Ankara</Option>
                                            <Option value="3">Antalya</Option>
                                            <Option value="4">Adana</Option>
                                            <Option value="5">İzmir</Option>
                                        </Select>
                                    </Form.Item>

                                    <Button type="primary" htmlType="submit" style={{height:"40px", marginLeft:"20px", backgroundColor:"#fdc600", borderColor:"#fdc600"}}>
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <div>
                <Swiper
                    effect={"coverflow"}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                >
                    {
                        slider.map(img => (
                            <SwiperSlide className="" style={{margin: "0"}}>
                                <LazyLoad>
                                    <img style={{width: "100%"}} src={img.imgUrl}/>
                                    <div className="slider__text_section">
                                        <div className="slider__title">
                                            <Logo color="#ffffff"/>
                                        </div>
                                        <div className="slider__context white__text_color">
                                            İş İçin <span className="color__text_yellow">Doğru</span> Yer
                                        </div>
                                    </div>
                                </LazyLoad>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </header>
    );
};

export default Header;

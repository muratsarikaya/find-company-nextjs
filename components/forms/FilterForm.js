import React from 'react';
import {Button, Form, Input, Select} from "antd";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 24 },
};


const onFinish = (values) => {
    console.log(values);
};

const {Option} = Select;

const FilterForm = (props) => {
    const [form] = Form.useForm();
    return (
        <div>
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
    );
};

FilterForm.propTypes = {};
FilterForm.defaultProps = {};

export default FilterForm;

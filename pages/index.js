import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import {Menu, Select, Input } from 'antd';



import {HomeOutlined, AppstoreOutlined, BankOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const { Option } = Select;
export default function Home() {
    const [current, setCurrent] = useState("");
    const handleClick = e => {
        console.log('click ', e);
        setCurrent({current: e.key});
    };
    return (
        <>
            <Layout>
                <div className="container" style={{marginTop:"-160px", position:"relative", zIndex:1}}>
                    <div className="row">
                        <div className="col-12">
                            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className="main__menu">
                                <Menu.Item key="Anasayfa">
                                    <i className="fa fa-home" aria-hidden="true"></i>
                                    <Link href="/"><a title="Anasayfa">ANASAYFA</a></Link>
                                </Menu.Item>
                                <Menu.Item key="app">
                                    <i className="fa fa-university" aria-hidden="true"></i>
                                    <Link href="/sirketimiz"><a >ŞİRKET</a></Link>
                                </Menu.Item>
                                <Menu.Item key="sirketimiz">
                                    <i className="fa fa-globe" aria-hidden="true"></i>
                                    <Link href="/hakkimizda"><a>HAKKIMIZDA</a></Link>
                                </Menu.Item>
                                <Menu.Item key="blog">
                                    <i className="fa fa-rss" aria-hidden="true"></i>
                                    <Link href="/blog"><a >BLOG</a></Link>
                                </Menu.Item>
                                <Menu.Item key="iletisim">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <Link href="/iletisim"><a>İLETİŞİM</a></Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3">
                           <div className="mb-4">
                               <Select
                                   showSearch
                                   style={{ width: 200 }}
                                   placeholder="Search to Select"
                                   optionFilterProp="children"
                                   filterOption={(input, option) =>
                                       option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                   }
                                   filterSort={(optionA, optionB) =>
                                       optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                   }
                               >
                                   <Option value="1">Not Identified</Option>
                                   <Option value="2">Closed</Option>
                                   <Option value="3">Communicated</Option>
                                   <Option value="4">Identified</Option>
                                   <Option value="5">Resolved</Option>
                                   <Option value="6">Cancelled</Option>
                               </Select>
                           </div>
                            <div className="mb-4">
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Search to Select"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    <Option value="1">Not Identified</Option>
                                    <Option value="2">Closed</Option>
                                    <Option value="3">Communicated</Option>
                                    <Option value="4">Identified</Option>
                                    <Option value="5">Resolved</Option>
                                    <Option value="6">Cancelled</Option>
                                </Select>
                            </div>
                            <div className="mb-4">
                                <Input placeholder="Basic usage" />
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="d-flex justify-content-between">
                                <div className="main__category_title">
                                    <h2>Kategori Listesi</h2>
                                </div>
                                <div className="main__category_filter"><Input placeholder="Basic usage" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

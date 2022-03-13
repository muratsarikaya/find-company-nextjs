import Link from "next/link";
import LogoUrl from "../../public/images/logo-white.png"
import Logo from "../common/Logo";
import styles from "./Header.module.css"
import MainSlider from "./MainSlider";
import MainMenu from "../common/MainMenu";
import Button from "../common/Button"
import Icon from "../common/Icon";
import {Dropdown, Menu} from "antd";
import React from "react";


const menu = (
    <Menu>
        <Menu.Item key="key1">
            <Link href="/login">
                <a rel="noopener noreferrer" className="d-flex">
                    <Icon classStyle="fa fa-sign-in" color="#555" size="18"/>
                    <span className="ms-2">Giriş Yap</span>
                </a>
            </Link>
        </Menu.Item>
        <Menu.Item key="key2">
            <Link href="/register">
                <a rel="noopener noreferrer" className="d-flex">
                    <Icon classStyle="fa fa-user-plus" color="#555" size="18"/>
                    <span className="ms-2">Kaydol</span>
                </a>
            </Link>
        </Menu.Item>
    </Menu>
);

const HeaderTwo = () => {

    return (
        <header>
            <div className="container-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3">
                            <div>
                                <Logo src={LogoUrl} style={{maxWidth: "150px"}}/>
                            </div>
                        </div>
                        <div className="col-6 justify-content-center">
                            <MainMenu/>
                        </div>
                        <div className="col-3">
                            <div className="d-flex align-items-center justify-content-lg-end">
                                <Dropdown overlay={menu} style={{top: "100px"}}
                                          overlayClassName="dropdownSubMenuWrapper">
                                    <a><Icon classStyle="fa fa-user-o" size="19"/></a>
                                </Dropdown>
                                <Button textColor="#fff" setValue="İlan Ekle"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderTwo;

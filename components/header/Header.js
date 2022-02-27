import React from 'react';
import Link from "next/link";
import LogoUrl from "../../public/images/logo-white.png"
import Logo from "../common/Logo";
import styles from "./Header.module.css"
import MainSlider from "./MainSlider";
import MainMenu from "../common/MainMenu";
import Button from "../common/Button"
import Icon from "../common/Icon";



const Header = () => {
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
                                <Link href="/hesabim"><a><Icon classStyle="fa fa-user-o" size="19"/></a></Link>
                                <Button  textColor="#fff" setValue="İlan Ekle"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainSlider/>
        </header>
    );
};

export default Header;

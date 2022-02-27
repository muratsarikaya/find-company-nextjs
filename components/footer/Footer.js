import React from 'react';
import Link from "next/link"
import Logo from "../common/Logo";
import LogoUrl from "../../public/images/logo-blue.png";
import Icon from "../common/Icon";
import {InputGroup, Input, Button} from "reactstrap";

const Footer = () => {
    return (
        <footer className="footer__wrapper">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="footer__logo"></div>
                            <Logo src={LogoUrl} style={{maxWidth: "150px"}}/>
                            <div className="mt-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi nam
                                    totam sequi, ipsam consequatur repudiandae libero illum.</p>
                            </div>
                            <div className="mt-3 d-flex">
                                <Icon color="#555" classStyle="fa fa-map-marker" size="19"/><span className="ms-2">13th North Ave, Florida, USA</span>
                            </div>
                            <div className="mt-3">
                                <Link href="mailto:asfasdf@asdf.com">
                                    <a className="d-flex"><Icon color="#555" classStyle="fa fa-envelope"
                                                                size="19"/><span
                                        className="ms-2">asdfsadf@asdf.com</span></a></Link>
                            </div>
                            <div className="mt-3">
                                <Link href="tel:44078767595"><a className="d-flex"><Icon color="#555"
                                                                                         classStyle="fa fa-phone"
                                                                                         size="19"/><span
                                    className="ms-2">+44 078 767 595</span></a></Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h2 className="footer__title">Popüler Aramalar</h2>
                            <ul>
                                <li><Link href="/"><a>Property for Rent</a></Link></li>
                                <li><Link href="/"><a>Property for Sale</a></Link></li>
                                <li><Link href="/"><a>Condominium for Sale</a></Link></li>
                                <li><Link href="/"><a>Resale Properties</a></Link></li>
                                <li><Link href="/"><a>Recent Properties</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h2 className="footer__title">Linkler</h2>
                            <ul>
                                <li><Link href="/about"><a>About us</a></Link></li>
                                <li><Link href="/contact"><a>Contact us</a></Link></li>
                                <li><Link href="/"><a>Privacy Policy</a></Link></li>
                                <li><Link href="/"><a>FAQ</a></Link></li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h2 className="footer__title">Abone Ol</h2>
                            <InputGroup>
                                <Input/>
                                <Button>
                                    Abone Ol
                                </Button>
                            </InputGroup>
                            <div>Takip Et</div>
                            <ul className="list-style-none d-flex">
                                <li>
                                    <Link href=""><a><Icon classStyle="fa fa-facebook" color="#555"
                                                           size="19"/></a></Link></li>
                                <li className="ms-3"><Link href=""><a><Icon classStyle="fa fa-twitter" color="#555"
                                                           size="19"/></a></Link></li>
                                <li className="ms-3"><Link href=""><a><Icon classStyle="fa fa-instagram" color="#555"
                                                           size="19"/></a></Link></li>
                                <li className="ms-3"><Link href=""><a><Icon classStyle="fa fa-youtube" color="#555"
                                                           size="19"/></a></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom_area text-center">
                © Travel NextJS 2022. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

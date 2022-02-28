import React from 'react';
import Link from "next/link";
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';
import {navLinks} from "../../utils/NavLinks";

const MainMenu = (props) => {
    return (
        <div className="menu__wrapper">
            <Menu mode="horizontal" className="text-center">
                {
                    navLinks.map((item, index) =>(
                        <MenuItem key={index}><Link href={item.path}><a>{item.name}</a></Link></MenuItem>
                    ))
                }
            </Menu>
        </div>
    );
};

MainMenu.propTypes = {};
MainMenu.defaultProps = {};

export default MainMenu;

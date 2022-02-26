import React from 'react';
import Link from "next/link";
import Menu, { SubMenu, MenuItem } from 'rc-menu';
import 'rc-menu/assets/index.css';

const MainMenu = (props) => {
    return (
        <div className="menu__wrapper">
            <Menu mode="horizontal" className="text-center">
                <MenuItem eventKey={1}><Link href="/"><a>Anasayfa</a></Link></MenuItem>
                <MenuItem eventKey={2}><Link href="/about"><a>Kurumsal</a></Link></MenuItem>
                <MenuItem eventKey={3}><Link href="/blog"><a>Blog</a></Link></MenuItem>
                <MenuItem eventKey={4}><Link href="/iletisim"><a>İletişim</a></Link></MenuItem>
            </Menu>
        </div>
    );
};

MainMenu.propTypes = {};
MainMenu.defaultProps = {};

export default MainMenu;

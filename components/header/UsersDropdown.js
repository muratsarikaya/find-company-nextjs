import React from 'react';
import { Menu, Dropdown } from 'antd';
import {DownOutlined} from '@ant-design/icons';
import Link from "next/link";


const menuUser = (
    <Menu style={{width:"160px"}}>
        <Menu.Item>
            <Link target="_blank" rel="noopener noreferrer" href="/login">
                <a><i className="fa fa-sign-in" aria-hidden="true"></i> <span className="ms-2">Giriş Yap</span></a>
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link target="_blank" rel="noopener noreferrer" href="/sign-up">
                <a><i className="fa fa-user-plus" aria-hidden="true"></i><span className="ms-2">Kaydol</span></a>
            </Link>
        </Menu.Item>
    </Menu>
);
const UsersDropdown = (props) => {
    return (

        <Dropdown className="user--menu-list" overlay={menuUser} placement="bottomCenter" arrow trigger={['click']} style={{maxWidth:"200px"}}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <i className="fa fa-user"></i><span className="ms-2">Kullanıcılar</span> <DownOutlined/>
            </a>
        </Dropdown>
    );
};



export default UsersDropdown;

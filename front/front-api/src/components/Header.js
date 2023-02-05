import { Link } from 'react-router-dom';
import React from 'react';
import { Menu } from 'antd';

const HeaderComponent = () => {

    const items = [
        {
            label: <Link to='/'> Accueil </Link>,
            key: 'Accueil',
        },
        {
            label: <Link to='/getAllMovies'> Catalogue </Link>,
            key: 'Films',
        },
        {
            label: <Link to='/getMyList/1'> Ma List </Link>,
            key: 'Contact',
        }
    ];

    return (
        <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            style={{ height: "82px", fontSize: "19px", lineHeight: "72px" }}
        />
    )
}

export default HeaderComponent
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HomeComponent = () => {
    return (
        <>
            <div className='titre'>
                <p>BIENVENUE SUR LIBRARY MOVIES</p>
            </div>
            <Link to='getMyList/1'>
                <Button type="primary" size='large' className='buttonPositionHome'>
                    START
                </Button>
            </Link>
            <br /><br />
        </>
    )
}

export default HomeComponent
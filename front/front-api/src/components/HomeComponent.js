import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const HomeComponenent = () => {
    const [size] = useState('large');

    return (
        <>
            <div className='titre'>
                <p>BIENVENUE SUR LIBRARY MOVIES</p>
            </div>
            <Link to='getMyList/1'>
                <Button type="primary" size={size} className='buttonPositionHome'>
                    START
                </Button>
            </Link>
            <br /><br />
            <Link to='getAllMovies' > Parcourir Films</Link>
            <Link to='getMyList/1'> Ma Liste </Link>

        </>
    )



}

export default HomeComponenent
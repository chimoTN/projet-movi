import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const MoviesComponent = () => {
    const [data, setData] = useState([]);
    const URL = "http://localhost:8080/getAllMovies"

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                URL
            );
            setData(result.data)
        };
        fetchData();
    }, []);

    return (

        <Fragment>
            <h1 className='text-center'>Catalogue Films</h1>

            {
                data.length === 0 ?
                    (
                        <h2 className='no-data'>Aucun film enregisté dans votre liste</h2>
                    )
                    :
                    <div className='MovieComponent'>
                        {data.map(movie => (
                            <div className='box' key={movie.idMovie}>
                                <div className='boxTitle'>{movie.title}</div>
                                <div className='boxCorps'>
                                    <b>Réalisateur : </b>{movie.producer}
                                    <p><b>Description : </b></p>{movie.description}
                                </div>
                                <Button type="primary" block><PlusOutlined /></Button>
                                <Button type="primary" block><EyeOutlined /></Button>

                            </div>
                        ))}
                    </div>
            }
        </Fragment>

    )
}

export default MoviesComponent
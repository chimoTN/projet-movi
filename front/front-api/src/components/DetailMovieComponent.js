import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions } from 'antd';
import axios from 'axios';


const DetailMovieComponent = () => {
    const [data, setData] = useState([]);
    let params = useParams()
    const URL = `http://localhost:8080/getDetailMovie/${params.idUser}/${params.idMovie}`

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
            <ul>
                {data.map(item => (
                    <li key={item.idListMovie}>
                        <p>{item.movie.title}</p>
                        <p>{item.movie.producer}</p>
                        <p>{item.movie.description}</p>
                        <p>{item.viewCount}</p>
                        <p>{item.note}</p>

                    </li>
                ))}

            </ul>
        </Fragment>
    )



}

export default DetailMovieComponent
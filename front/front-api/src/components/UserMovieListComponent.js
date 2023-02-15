import axios from 'axios';
import React, { useEffect, useState, Fragment } from 'react';
import {Button, Input, Modal} from 'antd';
import { Link } from 'react-router-dom'
import { RestOutlined, EyeOutlined } from '@ant-design/icons';


const MyListComponent = () => {
    const [data, setData] = useState([]);
    const URL = "http://localhost:8080/getMyList/1"


    const deleteMovieOnList = (event) =>{
        axios.delete(`http://localhost:8080/removePlayListUserMovie/${event.target.value}`)
            .then(response => console.log(response))
            .catch(err => console.log("Erreur = ", err))
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                URL
            );
            setData(result.data)
        };
        fetchData();
    }, [deleteMovieOnList]);


    return (

        <Fragment>
            <h2 className='text-center titre'>Ma Liste</h2>

            {
                data.length === 0 ?
                    (
                        <h2 className='no-data'>Aucun film enregisté dans votre liste</h2>
                    )
                    :
                    <div className='MovieComponent'>
                        {data.map(movie => (

                            <div className='box' key={movie.idListMovie}>
                                <div className='boxTitle'>{movie.movie.title}</div>
                                <div className='boxCorps'>
                                    <b>Réalisateur : </b>{movie.movie.producer}
                                    <p><b>Description : </b></p>{movie.movie.description}
                                </div>
                                <br />

                                <Link to={`/getDetailMovie/${movie.user.idUser}/${movie.movie.idMovie}`}>
                                    <Button type="primary" block><EyeOutlined /></Button>
                                </Link>
                                <Button type="primary" htmlType="submit" value={movie.idListMovie} onClick={deleteMovieOnList}>
                                    <RestOutlined />
                                </Button>

                            </div>
                        ))}
                    </div>
            }
        </Fragment>

    )
}

export default MyListComponent
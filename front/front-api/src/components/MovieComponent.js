import { PlusOutlined, EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import AddMovieOnListPopUpComponent from './AddMovieOnListPopUp';

const MoviesComponent = () => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const [addMovie, setAddMovie] = useState([]);


    const openPopUpFunction = (e, bool, title) => {
        if (addMovie != null && e.target.id != null) {
            const movie = [e.target.id, title];
            setOpenPopUp(bool)
            setAddMovie(movie)
        }
    }

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
            <h1 className='text-center titre'>Catalogue Films</h1>

            {
                data.length === 0 ?
                    (
                        <h2 className='no-data'>Aucun film enregistré dans notre service</h2>
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
                                <Button id={movie.idMovie} htmlType="submit" onClick={(e) => openPopUpFunction(e, true, movie.title)} type="primary" block><PlusOutlined /></Button>
                                <Button type="primary" block><EyeOutlined /></Button>

                            </div>
                        ))}
                    </div>
            }

            {openPopUp && (
                < AddMovieOnListPopUpComponent openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} addMovie={addMovie} />
            )}
        </Fragment>
    )
}

export default MoviesComponent
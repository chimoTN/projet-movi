import React, { useEffect, useState, Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Input } from 'antd';
const { TextArea } = Input;

const DetailMovieComponent = () => {
    const [data, setData] = useState([]);
    let params = useParams()
    const URL = `http://localhost:8080/getDetailMovie/${params.idUser}/${params.idMovie}`;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                URL
            );
            setData(result.data)
        };
        fetchData();
    }, [URL]);

    return (
        <Fragment>
            <div className='MovieComponent'>
                {data.map(movie => (
                    <div className='box view-update' key={movie.idListMovie}>
                        <div className='boxTitle'>{movie.movie.title}</div>
                        <div className='boxCorps'>
                            <b>Réalisateur : </b>
                            <Input value={movie.movie.producer} readOnly />
                            <br /><br /><b>Description</b>
                            <TextArea rows={4} value={movie.movie.description} readOnly />
                            <br /><br />
                            <b>Nombre de vues : </b>
                            <Input value={movie.viewCount} />
                            <br /><br />
                            <b>Notes : </b>
                            <Input value={movie.note} />
                        </div>
                        <br></br>
                        <Button type="primary" block>Modifier</Button>
                        <Link to="/getMyList/1">
                            <Button type="primary" block danger>Retour</Button>
                        </Link>
                    </div>
                ))}

            </div>
        </Fragment>
    )
}

export default DetailMovieComponent
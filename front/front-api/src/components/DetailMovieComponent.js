import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Axios from 'axios';
import { Button, Input } from 'antd';

const DetailMovieComponent = () => {
    const [data, setData] = useState([]);
    let params = useParams()
    let navigate = useNavigate();
    const URL = `http://localhost:8080/getDetailMovie/${params.idUser}/${params.idMovie}`;
    const { TextArea } = Input;
    const [movie, setMovie] = useState(
        {
            note: "0",
            viewCount: "0"
        }
    )

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                URL
            );
            setData(result.data)
            setMovie({ note: result.data[0].note, viewCount: result.data[0].viewCount })
        };
        fetchData();
    }, [URL]);

    const handlerMovie = (event) => {
        const value = event.target.value
        const name = event.target.name
        setMovie({ ...movie, [name]: value })
    };

    const updateMovie = () => {
        const URL_modifyMovie = `http://localhost:8080/updateMovieOnAList/${data[0].idListMovie}`
        Axios
            .put(URL_modifyMovie, {
                note: movie.note,
                viewCount: movie.viewCount
            })

            .then(() => navigate("/getMyList/1"))
            .catch(err => console.log("error => ", err))
    }

    return (
        <>
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
                            <Input defaultValue={movie.viewCount} onChange={handlerMovie} name="viewCount" />
                            <br /><br />
                            <b>Notes : </b>
                            <Input defaultValue={movie.note} onChange={handlerMovie} name="note" />
                        </div>
                        <br></br>
                        <Button type="primary" block onClick={updateMovie}>Modifier</Button>
                        <Link to="/getMyList/1">
                            <Button type="primary" block danger>Retour</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DetailMovieComponent
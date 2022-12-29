import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { useParams } from 'react-router-dom';
import { Button, Space } from 'antd';



const DetailMovie = () => {
    const [data, setData] = useState();

    const [isEmpty, setEmpty] = useState(false);

    let params = useParams()
    const URL = `http://localhost:8080/getDetailMovie/${params.idUser}/${params.idMovie}`;

    //go chercher UN film
    const getMovieDetail = () => {
        Axios
            .get(URL)
            .then(response => setData(response.data))
            .catch(error => console.log('error = ', error))

        console.log("data : ", data)
    };

    useEffect(() => {
        getMovieDetail();
        if (data != undefined) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    }, []);

    return (
        <>
            {isEmpty === true ? "cc" : "not work"}
            {/* <h1 className='text-center'>{data.movie.title}</h1>

            <div className='box'>
                <div className='boxCorps'>
                    <b>Réalisateur : </b>{data.movie.producer}
                    <p><b>Description : </b></p>{data.movie.description}
                </div>
                <div className='divButton'>
                    <Button type="primary" block>
                        Modifier
                    </Button>
                </div>
            </div> */}

        </>
    )



}

export default DetailMovie